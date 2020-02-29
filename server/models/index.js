var db = require('../db/index.js');

// console.log('db is here--->', db);

module.exports = {
  messages: {
    get: function (callback) {
      let getQuery = 'SELECT * FROM messages';
      // 'SELECT messages.id, messages.messageText, rooms.roomname, usernames.username FROM messages INNER JOIN rooms ON (messages.roomID = rooms.id) INNER JOIN usernames ON (messages.userID = usernames.id);';
      db.query(getQuery, function(err, results) {
        console.log('this is the result in models.messages.get', results);
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      console.log('data is here -->', data);
      var postQuery = 'INSERT INTO messages (messageText, roomID, userID) VALUES ("' + data.messageText + '", (SELECT id FROM rooms WHERE roomname = "' + data.roomname + '"), (SELECT id FROM usernames WHERE username ="' + data.username + '"))';
      db.query(postQuery, function (err, results) {
        console.log('this is the posted message in models.messages.post', results);
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT username FROM usernames', function(err, results) {
        if (err) {
          console.log('error- cannot retrieve users');
        } else {
          callback(null, JSON.stringify(results));
        }
      });
    },
    post: function (usernameData, callback) {
      var userQuery = 'INSERT INTO usernames (username) VALUES (" ' + usernameData.username + '")';
      db.query('', function(err, results) {
        if (err) {
          console.log('error- cannot post user into database');
        } else {
          callback(results);
        }
      });
    }
  }
};

