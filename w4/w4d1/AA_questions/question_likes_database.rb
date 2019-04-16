require_relative 'questions_database'

class QuestionLike

   attr_accessor :id, :author_id, :question_id, :like_count
    def self.all
        data = QuestionDBConnection.instance.execute("SELECT * FROM question_likes")
        data.map {|datum| QuestionLike.new(datum)}
   end

   def self.find_by_id(id)
      question_like = QuestionDBConnection.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          question_likes
        WHERE
          id = ?
      SQL
      return nil unless question_like.length > 0 
      QuestionLike.new(question_like.first)
   end

   def self.likers_for_question_id(question_id)
      question_like = QuestionDBConnection.instance.execute(<<-SQL, question_id)
        SELECT
          users.*
        FROM
          question_likes
        JOIN
          users
          ON users.id = question_likes.author_id
        WHERE
          question_likes.question_id = ?
      SQL
      return nil unless question_like.length > 0 
      question_like.map {|datum| User.new(datum)}
   end

   def self.num_likes_for_question_id(question_id)
      question_like = QuestionDBConnection.instance.execute(<<-SQL, question_id)
        SELECT
          COUNT(question_likes.question_id) as count
        FROM
          question_likes
        JOIN
          users
          ON users.id = question_likes.author_id
        WHERE
          question_likes.question_id = ?
      SQL
      return nil unless question_like.length > 0 
      question_like.first["count"]
   end

   def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @author_id = options['author_id']
        
   end

   def create
        raise "#{self} already in database" if self.id
        QuestionDBConnection.instance.execute(<<-SQL, @question_id, @author_id)
          INSERT INTO
            question_likes(question_id, author_id)
          VALUES
            (?, ?)
        SQL
        @id = QuestionDBConnection.instance.last_insert_row_id
   end

   def update
        raise "#{self} not in database" unless @id
        QuestionDBConnection.instance.execute(<<-SQL, @question_id, @author_id, @id)
          UPDATE 
            question_likes
          SET
            question_id = ?, author_id = ?
          WHERE
            id = ? 
        SQL
   end
  end