require_relative 'questions_database'
require_relative 'users_database'

class QuestionFollow
    attr_accessor :user_id, :question_id
    def self.all
        data = QuestionDBConnection.instance.execute("SELECT * FROM question_follows")
        data.map {|datum| QuestionFollow.new(datum)}
   end

   def self.find_by_id(id)
      question_follows = QuestionDBConnection.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          question_follows
        WHERE
          id = ?
      SQL
      return nil unless question_follows.length > 0 
      QuestionFollow.new(question_follows.first)
   end

   def self.followers_for_question_id(question_id)
      question_follows = QuestionDBConnection.instance.execute(<<-SQL, question_id)
          SELECT
            users.*
          FROM
            question_follows
          JOIN
            users
            ON users.id = question_follows.user_id
          JOIN
            questions
            ON questions.id = question_follows.question_id
          WHERE
            question_id = ?
        SQL
        return nil unless question_follows.length > 0 
        question_follows.map {|datum| User.new(datum)}
   end

   def self.followed_questions_for_user_id(user_id)
      question_follows = QuestionDBConnection.instance.execute(<<-SQL, user_id)
          SELECT
            questions.* 
          FROM
            question_follows
          JOIN
            questions
            ON questions.id = question_follows.question_id
          WHERE
            question_follows.user_id = ?
        SQL
        return nil unless question_follows.length > 0 
        question_follows.map {|datum| Question.new(datum)}
   end

   def self.most_followed_questions(n)
      question_follows = QuestionDBConnection.instance.execute(<<-SQL, n)
          SELECT
            questions.* 
          FROM
            question_follows
          JOIN
            questions
            ON questions.id = question_follows.question_id
          GROUP BY
            questions.id
          ORDER BY
            count(question_follows.question_id) DESC
          LIMIT
            ?
          
        SQL
        return nil unless question_follows.length > 0 
        question_follows.map {|datum| Question.new(datum)}
   end

   def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
   end

   def create
        raise "#{self} already in database" if @id
        QuestionDBConnection.instance.execute(<<-SQL, @user_id, @question_id)
          INSERT INTO
            question_follows(user_id, question_id)
          VALUES
            (?, ?)
        SQL
        @id = QuestionDBConnection.instance.last_insert_row_id
   end

   def update
        raise "#{self} not in database" unless @id
        QuestionDBConnection.instance.execute(<<-SQL, @user_id, @question_id, @id)
          UPDATE 
            question_follows
          SET
            user_id = ?, question_id = ?
          WHERE
            id = ? 
        SQL
   end
end