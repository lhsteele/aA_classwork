require_relative 'questions_database'
require_relative 'question_follows_database'
class User
    attr_accessor :id, :fname, :lname
  def self.all
        data = QuestionDBConnection.instance.execute("SELECT * FROM users")
        data.map {|datum| User.new(datum)}
   end

   def self.find_by_id(id)
      user = QuestionDBConnection.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          users
        WHERE
          id = ?
      SQL
      return nil unless user.length > 0 
      User.new(user.first)
   end

   def self.find_by_name(fname,lname)
    user = QuestionDBConnection.instance.execute(<<-SQL, fname,lname)
        SELECT
            *
        FROM
            users
        WHERE
            fname = ? AND lname = ?
    SQL
    return nil unless user.length > 0 
    User.new(user.first)
   end

   

   def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
   end

   def create
        raise "#{self} already in database" if @id
        QuestionDBConnection.instance.execute(<<-SQL, @fname, @lname)
          INSERT INTO
            users(fname, lname)
          VALUES
            (?, ?)
        SQL
        @id = QuestionDBConnection.instance.last_insert_row_id
   end

   def update
        raise "#{self} not in database" unless @id
        QuestionDBConnection.instance.execute(<<-SQL, @fname, @lname, @id)
          UPDATE 
            users
          SET
            fname = ?, lname = ?
          WHERE
            id = ? 
        SQL
   end

   def authored_questions
     Question.find_by_author_id(self.id)
   end

   def authored_replies
    Reply.find_by_user_id(self.id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(self.id)
  end

end