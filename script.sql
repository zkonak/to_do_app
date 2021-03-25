
create database todolistapp;

create table todolistapp.to_do (id int(6) auto_increment primary key , name varchar(100));
create table todolistapp.task (id int(6) auto_increment primary key,
to_do_id int(6),description varchar(250),date_creation date,status boolean default false,
  FOREIGN KEY (to_do_id) REFERENCES todolistapp.to_do(id)
);


insert into todolistapp.to_do (NAME) values ("liste a faire")

select * from todolistapp.to_do 


commit

SELECT * FROM todolistapp.task where to_do_id=1

alter table todolistapp.task add column name varchar(100)



update task set description= status= name = where id=



SELECT * FROM task where to_do_id=${id}

INSERT INTO `todolistapp`.`task` (`id`, `to_do_id`, `description`, `date_creation`, `status`, `name`) VALUES (1, 1, 'desc 1', '24.03.2021', false, 'task 1');
INSERT INTO `todolistapp`.`task` (`id`, `to_do_id`, `description`, `date_creation`, `status`, `name`) VALUES ('2', '1', 'desc 2', '24.03.2021', false, 'task 2');
INSERT INTO `todolistapp`.`task` (`id`, `to_do_id`, `description`, `date_creation`, `status`, `name`) VALUES ('3', '2', 'desc 3', '24.03.2021', false, 'task 3');
INSERT INTO `todolistapp`.`task` (`id`, `to_do_id`, `description`, `date_creation`, `status`, `name`) VALUES ('4', '2', 'desc 4', '24.03.2021', false, 'task 4');