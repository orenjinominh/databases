
CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  messageText VARCHAR(200),
  roomID INT(5),
  userID INT(5)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE IF NOT EXISTS rooms (
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 roomname VARCHAR(100)
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

INSERT INTO usernames (id, username) VALUES (1, 'minh');
INSERT INTO usernames (id, username) VALUES (2, 'chris');
INSERT INTO usernames (id, username) VALUES (3, 'clarissa');

INSERT INTO rooms (id, roomname) VALUES (1, 'sadroom');
INSERT INTO rooms (id, roomname) VALUES (2, 'funroom');
INSERT INTO rooms (id, roomname) VALUES (3, 'angeryroom');

INSERT INTO messages (id, messageText, roomID, userID) VALUES (1, 'this is a sample text from minh', 1, 1);
INSERT INTO messages (id, messageText, roomID, userID) VALUES (2, 'this is the second message', 3, 1);
INSERT INTO messages (id, messageText, roomID, userID) VALUES (3, 'this is the third message', 2, 2);