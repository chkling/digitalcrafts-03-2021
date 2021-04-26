CREATE DATABASE contact_list;

CREATE TABLE contacts(
    contacts_id SERIAL PRIMARY KEY,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    phone_number VARCHAR (20),
    email_address VARCHAR (40)
);

