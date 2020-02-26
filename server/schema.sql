
CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  messageText VARCHAR(200),
  roomID INT,
  userID INT
);

/* Create other tables and define schemas for them here! */


CREATE TABLE IF NOT EXISTS rooms (
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 room VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS usernames (
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 username VARCHAR(100)
);

ALTER TABLE messages ADD FOREIGN KEY (roomID) REFERENCES rooms(id);
ALTER TABLE messages ADD FOREIGN KEY (userID) REFERENCES usernames(id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

