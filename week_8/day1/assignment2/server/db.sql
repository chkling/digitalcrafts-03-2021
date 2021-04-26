CREATE DATABASE todolist2;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    task VARCHAR (30),
    priority VARCHAR (20)
);