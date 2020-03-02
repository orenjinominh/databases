// var db = require('../db/index.js');
// var promise = require('bluebird');

// module.exports = {
//   messages: {
//     get: function(callback) {
//       console.log('Hit models.messages.get!');
//       console.log('the messages table is here--->', db.Message);
//       db.Message.findAll({
//         include: [db.User]
//       })
//       .then(function(err,results) {
//         callback(err,JSON.stringify(results));
//       });
//     },
//     post: function(data,callback) {
//       console.log('posting data pre-parse is here--->', data); 
//       data.JSON.parse(data);

//       db.User.findOne({where: {username: data.username}})
//         .then(function(userResult) {
//           var params = {
//             messageText: data.message,
//             roomname: data.roomname,
//             usernameId: userResult.id
//           };
//           db.Message.create(params);
//         })
//         .then(function(err) {
//           console.log('posting message was good?');
//           callback(err, results);
//         });
//     }
//   },

//   users: {
//     get: function(callback) {
//       db.User.findAll({
//         attributes: ['username']
//       })
//       .then(function(err, result) {
//         callback(err, result);
//       })
//     },
//     post: function(userData,callback) {
//       console.log('userdata is here--->', userData);
//       db.User.findOrCreate({
//         where: {username: userData}
//       })
//       .spread(function(user))
//       .then(function(err, results) {
//         callback(err, results);
//       });
//     }
//   }

// };


/* PRE-ORM-REFACTOR CODE
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
*/

