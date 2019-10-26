drop database if exists top_songsDB;

create database top_songsDB;

use top_songsDB;

drop table if exists Top5000;

create table Top5000(
position INTEGER(10) NOT NULL,
artist VARCHAR(100),
song VARCHAR(100),
year INTEGER,
raw_total DECIMAL(10,4) NULL,
raw_usa DECIMAL(10,4) NULL,
raw_uk DECIMAL(10,4) NULL,
raw_eur DECIMAL(10,4) NULL,
raw_row DECIMAL(10,4) NULL,
PRIMARY KEY (position)
);

CREATE TABLE top_albums (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

select * from Top5000;

Select artist from Top5000 group by artist having count(artist) > 1;

select * from top_albums;

