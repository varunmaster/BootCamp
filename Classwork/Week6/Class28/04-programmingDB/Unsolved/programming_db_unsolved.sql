-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
  -- Create a string column called "language" --
	language VARCHAR(30),
  -- Create an integer column called "rating" --
	rating VARCHAR(5),
  -- Create a boolean column called "mastered" which will automatically fill --
	mastered bool default 1
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
);

-- Create new example rows
insert into programming_languages
set language = 'javascript', rating = '8', mastered = true;

insert into programming_languages
set language = 'c#', rating = '7', mastered = false;

insert into programming_languages
set language = 'java', rating = '7';

insert into programming_languages
set language = 'python', rating = '9', mastered = false;


select * from programming_languages;