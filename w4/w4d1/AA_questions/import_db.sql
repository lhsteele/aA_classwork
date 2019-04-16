DROP TABLE if EXISTS question_follows;
DROP TABLE if EXISTS replies;
DROP TABLE if EXISTS question_likes;
DROP TABLE if EXISTS questions;
DROP TABLE if EXISTS users;
PRAGMA foreign_keys = ON;

CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255)
);

CREATE TABLE questions(
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR(255),
    associated_author INTEGER,

    FOREIGN KEY (associated_author) REFERENCES users(id)
     
);

CREATE TABLE question_follows(
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    question_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);


CREATE TABLE replies(
    id INTEGER PRIMARY KEY,
    question_id INTEGER,
    body VARCHAR(255),
    parent_reply_id INTEGER, /*references to the reply before this reply*/
    author_id INTEGER,

    FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  author_id INTEGER,
  question_id INTEGER,
  like_count INTEGER,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO 
  users (fname, lname)
VALUES  
  ('David', 'Suon'),
  ('Lisa', 'Steele');

INSERT INTO 
  questions (title, body, associated_author)
VALUES 
  ('SQL questions', 'Are we going over CSS in lecture time?', 1),
  ('AA questions', 'Can we go over the tables?', 2);

INSERT INTO 
  question_follows(user_id, question_id)
VALUES 
  (1, 1),
  (2, 2);

INSERT INTO 
  replies(question_id, body, parent_reply_id, author_id)
VALUES 
  -- (1, 'sjkdlfjkls' , NULL, 1),
  -- (1, 'sldkfjlksdj', NULL, 2);
  (1,(SELECT body FROM questions WHERE questions.id = 1 ), NULL,
  (SELECT associated_author FROM questions WHERE questions.id = 1) ),
  (2,(SELECT body FROM questions WHERE questions.id = 2 ), NULL,
  (SELECT associated_author FROM questions WHERE questions.id= 2) )
  ;

INSERT INTO 
  question_likes(author_id, question_id)
VALUES 
  (1, 1),
  (2, 2);

