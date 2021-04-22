CREATE DATABASE petstore;

CREATE TABLE pets(
    pets_id SERIAL PRIMARY KEY,
    animal VARCHAR (30),
    quantity VARCHAR (10)
);