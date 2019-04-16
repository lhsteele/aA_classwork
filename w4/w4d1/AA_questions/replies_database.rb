require_relative 'questions_database'

class Reply
  attr_accessor :question_id, :body, :parent_reply_id, :author_id, :id
    def self.all
        data = QuestionDBConnection.instance.execute("SELECT * FROM replies")
        data.map {|datum| Reply.new(datum)}
   end

   def self.find_by_id(id)
      reply = QuestionDBConnection.instance.execute(<<-SQL, id)
        SELECT
          *
        FROM
          replies
        WHERE
          id = ?
      SQL
      return nil unless reply.length > 0 
      Reply.new(reply.first)
   end

   def self.find_by_user_id(author_id)
    reply = QuestionDBConnection.instance.execute(<<-SQL, author_id)
    SELECT
        *
    FROM
        replies
    WHERE
        author_id = ?
    SQL
    return nil unless reply.length > 0 
    Reply.new(reply.first)
   end

   def self.find_by_question_id(question_id)
    reply = QuestionDBConnection.instance.execute(<<-SQL, question_id)
    SELECT
        *
    FROM
        replies
    WHERE
        question_id = ?
    SQL
    return nil unless reply.length > 0 
    Reply.new(reply.first)
   end

   def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @body = options['body']
        @parent_reply_id = options['parent_reply_id']
        @author_id = options['author_id']
   end

   def create
        raise "#{self} already in database" if @id
        QuestionDBConnection.instance.execute(<<-SQL, @question_id, @body, @parent_reply_id, @author_id)
          INSERT INTO
            replies(question_id, body, parent_reply_id, author_id)
          VALUES
            (?, ?, ?, ?)
        SQL
        @id = QuestionDBConnection.instance.last_insert_row_id
   end

   def update
        raise "#{self} not in database" unless @id
        QuestionDBConnection.instance.execute(<<-SQL, @question_id, @body, @parent_reply_id, @author_id, @id)
          UPDATE 
            replies
          SET
            question_id = ?, body = ?, parent_reply_id = ?, author_id = ?
          WHERE
            id = ? 
        SQL
   end

   def author
      User.find_by_id(self.author_id)
   end

   def question
     Question.find_by_id(self.question_id)
   end

   def parent_reply
      Reply.find_by_id(self.parent_reply_id)
   end

   def child_replies
    reply = QuestionDBConnection.instance.execute(<<-SQL, self.id)
    SELECT
        *
    FROM
        replies
    WHERE
        parent_reply_id = ?
    SQL
    return nil unless reply.length > 0 
    Reply.new(reply.first)
   end

end
