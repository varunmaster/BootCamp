drop database if exists playlist_db;

create database playlist_db;

use playlist_db;

drop table if exists songs;

create table songs(
id INTEGER AUTO_INCREMENT NOT NULL,
title VARCHAR(100) NOT NULL,
artist VARCHAR(50) NOT NULL,
genre varchar (50),
PRIMARY KEY (id)
);

insert into songs
set title = 'Man of the Year', artist = 'ScHoolboyQ', genre = 'Rap';

insert into songs
set title = 'Lose Yourself', artist = 'Eminem';

insert into songs
set title = 'Silvera', artist = 'Gojira', genre = 'Metal';

insert into songs
set title = 'Hey Ya!', artist = 'OutKast';


