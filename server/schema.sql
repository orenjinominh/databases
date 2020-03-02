
-- CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  messageText VARCHAR(200),
  roomname VARCHAR(200),
);

CREATE TABLE usernames (
 id INT PRIMARY KEY AUTO_INCREMENT,
 username VARCHAR(100)
);

ALTER TABLE messages DROP createdAt; 
ALTER TABLE messages DROP updatedAt; 
ALTER TABLE usernames DROP createdAt; 
ALTER TABLE usernames DROP updatedAt; 
/* Create other tables and define schemas for them here! */


-- CREATE TABLE IF NOT EXISTS rooms (
--  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  roomname VARCHAR(100)
-- );

-- ALTER TABLE messages ADD FOREIGN KEY (roomID) REFERENCES rooms(id);
ALTER TABLE messages ADD COLUMN usernameId INTEGER;
ALTER TABLE messages ADD FOREIGN KEY (usernameId) REFERENCES usernames(id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* VALUES TO POPULATE TABLE
INSERT INTO usernames (id, username) VALUES (1, 'minh');
INSERT INTO usernames (id, username) VALUES (2, 'chris');
INSERT INTO usernames (id, username) VALUES (3, 'clarissa'); */

