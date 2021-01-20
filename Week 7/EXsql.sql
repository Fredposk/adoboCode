-- EX for sql
 create table actors (
  name varchar(255) not null,
  age INT not null,
  number_of_oscars INT);

insert into actors (name, age, number_of_oscars) values ('Leonardo DiCaprio', 41, 1);
insert into actors (name, age, number_of_oscars) values ('Jennifer Lawrence', 25, 1);
insert into actors (name, age, number_of_oscars) values ('Samuel L. Jackson', 67, 0);
insert into actors (name, age, number_of_oscars) values ('Meryl Streep', 66, 3);
insert into actors (name, age, number_of_oscars) values ('John Cho', 43, 0);

-- Q1
SELECT * from actors where number_of_oscars > 1;
-- Q2
SELECT * FROM actors where age > 30;