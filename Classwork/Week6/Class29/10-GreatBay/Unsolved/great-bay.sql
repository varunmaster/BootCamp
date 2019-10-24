drop database if exists great_bay_db;

create database great_bay_db;

use great_bay_db;

drop table if exists items;

create table items(
id INTEGER AUTO_INCREMENT NOT NULL,
name varchar(50) not null,
start_bid decimal(10,2) not null default 0,
highest_bid decimal(10,2) not null default 0,
PRIMARY KEY (id)
);

insert into items
set name = 'cut grass', start_bid = '10.00', highest_bid = '10.00';

insert into items
set name = 'sweep floors', start_bid = '50.00', highest_bid = '50.00';
