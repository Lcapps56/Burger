DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INTEGER(10) AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN defalut 0,
    PRIMARY KEY(id)
);