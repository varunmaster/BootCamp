CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (
	id integer AUTO_INCREMENT not null,
  author varchar(50) not null,
  chirp varchar(250) not null,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
