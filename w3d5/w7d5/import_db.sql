DROP TABLE IF EXISTS cattoys;
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS toys;

CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  color VARCHAR(100),
  breed VARCHAR(100) 
);

CREATE TABLE toys (
  id SERIAL PRIMARY KEY,
  price DECIMAL(10, 2),
  color VARCHAR(100),
  name VARCHAR(100) 
);


CREATE TABLE cattoys (
  id SERIAL PRIMARY KEY,
  cat_id INTEGER, 
  toy_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats(id),
  FOREIGN KEY (toy_id) REFERENCES toys(id)
);

INSERT INTO 
  cats (name, color, breed)
VALUES
  ('Lisa', 'Yellow', 'Abyssinian')
;
INSERT INTO 
  cats (name, color, breed)
VALUES
  ('Gavin', 'Red', 'Toyger')
;
INSERT INTO 
  cats (name, color, breed)
VALUES
  ('Bailey', 'Blue', 'Russian Blue')
;
INSERT INTO 
  cats (name, color, breed)
VALUES
  ('Jasmine', 'Leopard Spotted', 'Egyptian Mau')
;
INSERT INTO 
  cats (name, color, breed)
VALUES
  ('Peter', 'Blue', 'Russian Blue')
;



INSERT INTO 
  toys (price, color, name)
VALUES
  (7.00, 'Purple', 'Feather Wand')
;
INSERT INTO 
  toys (price, color, name)
VALUES
  (5.00, 'Grey', 'Robot Mouse')
;
INSERT INTO 
  toys (price, color, name)
VALUES
  (5.00, 'Yellow', 'Chickadee')
;
INSERT INTO 
  toys (price, color, name)
VALUES
  (4.50, 'Clear', 'Treat Ball')
;
INSERT INTO 
  toys (price, color, name)
VALUES
  (12.00, 'Silver', 'Laser Pointer')
;



INSERT INTO 
  cattoys (cat_id, toy_id)
VALUES
  (1, 3)
;
INSERT INTO 
  cattoys (cat_id, toy_id)
VALUES
  (3, 1)
;
INSERT INTO 
  cattoys (cat_id, toy_id)
VALUES
  (3, 2)
;
INSERT INTO 
  cattoys (cat_id, toy_id)
VALUES
  (3, 4)
;
INSERT INTO 
  cattoys (cat_id, toy_id)
VALUES
  (4, 2)
;