var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      let getQuery = 'SELECT * FROM messages';
      
      db.query(getQuery, function(err, results) {
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      var params = [];
      params[0] = data.objectId;
      params[1] = data.message;
      params[2] = data.username;
      params[3] = data.roomname;
      
      var postQuery = 'INSERT INTO messages (id, messageText, userID, roomname) VALUES (?, ?, (SELECT id FROM usernames WHERE username = ? limit 1), ?)';
      
      db.query(postQuery, params, function (err, results) {
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
          callback(err, JSON.stringify(results));
        }
      });
    },
    post: function (usernameData, callback) {
      var username = usernameData.username; //  username =  \'Valjean\'
      var userQuery = "INSERT INTO usernames (username) VALUES ('" + username + "');";
      db.query(userQuery, username, function(err, results) {
        callback(err, results);
      });
    }
  }
};

