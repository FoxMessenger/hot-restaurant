CREATE DATABASE Hot_restaurantDB;

USE Hot_restaurantDB;

CREATE TABLE forms (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(40) NULL,
    PRIMARY KEY (id)
);


INSERT INTO forms (name, email, phone_number)
VALUES 
("Jason", "jjson@yahoo.com", "7738378488"),
("Liam", "Liam7373@yahoo.com", "7738282273"),
("zach", "idk244@yahoo.com", "7747483888");


SELECT * FROM forms;


