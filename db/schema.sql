CREATE DATABASE burgers_DB;
USE burgers_DB;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
	PRIMARY KEY (id)
);