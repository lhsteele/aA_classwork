require 'sqlite3'
require 'singleton'
require_relative 'users_database'
require_relative 'replies_database'
require_relative 'question_follows_database'
class QuestionDBConnection < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end

end

class Question
    attr_accessor :id, :title, :body, :associated_author

   def self.all
        data = QuestionDBConnection.instance.execute("SELECT * FROM questions")
        data.map {|datum| Question.new(datum)}
   end

   def self.find_by_id(id)
      question = QuestionDBConnection.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          questions
        WHERE
          id = ?
      SQL
      return nil unless question.length > 0 
      Question.new(question.first)
   end

   def self.find_by_author_id(associated_author)
      question = QuestionDBConnection.instance.execute(<<-SQL, associated_author)
        SELECT
          *
        FROM
          questions
        WHERE
          associated_author = ?
      SQL
      return nil unless question.length > 0 
      Question.new(question.first)
   end

   def self.most_followed(n)
      QuestionFollow.most_followed_questions(n)
   end

   def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @associated_author = options['associated_author']
   end

   def create
        raise "#{self} already in database" if self.id
        QuestionDBConnection.instance.execute(<<-SQL, @title, @body, @associated_author)
          INSERT INTO
            questions(title, body, associated_author)
          VALUES
            (?, ?, ?)
        SQL
        @id = QuestionDBConnection.instance.last_insert_row_id
   end

   def update
        raise "#{self} not in database" unless self.id
        QuestionDBConnection.instance.execute(<<-SQL, @title, @body, @associated_author, @id)
          UPDATE 
            questions 
          SET
            title = ?, body = ?, associated_author = ?
          WHERE
            id = ? 
        SQL
   end

   def author
      User.find_by_id(self.associated_author)
   end

   def replies
     Reply.find_by_question_id(self.id)
   end
  
   def followers
    QuestionFollow.followers_for_question_id(self.id)
  end
end


