// var models = require('../models/index.js');
var db = require('../db/index.js');
var promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('reaching the get request in controller');
      // models.messages.get(function(err, results) {
      //   if (err) {
      //     console.log('Error getting message -->', err);
      //   } else {
      //     res.json(results);
      //   }
      // });
      db.Message.findAll({include: [db.User]})
      .then(function(messages) {
        res.json(messages);
      });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      // var body = req.body; //giving object with keys 
      // models.messages.post(body, function(err, results) {
      //   if (err) {
      //     console.log('Error posting message -->', err);
      //   } else {
      //     console.log('Message was posted!');
      //     results = JSON.stringify(results);
      //     res.end(results);
      //   }
      // });
      db.User.findOrCreate({where: {username: req.body.username}})
      // findOrCreate returns multiple resutls in an array
      // use spread to assign the array to function arguments
      .spread(function(usernames) {
        db.Message.create({
          usernameId: usernames.get('id'),
          messagetext: req.body.message,
          roomname: req.body.roomname
        }).then(function(message) {
          res.sendStatus(201);
        });
      });
  
    }
    // } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // models.users.get(function(err, results) {
      //   if (err) {
      //     console.log('Error getting user -->', err);
      //   } else {
      //     res.end(results);
      //   }
      // });
      db.User.findAll()
      .then(function(users) {
        res.json(users);
      });
    },
    post: function (req, res) {
      // console.log('reaching the users post request in controller');
      // var usernameData = req.body;
      // models.users.post(usernameData, function(err, results) {
      //   if (err) {
      //     console.log('Error posting username -->', err);
      //   } else {
      //     results = JSON.stringify(results);
      //     res.end(results);
      //   }
      // });
      db.User.findOrCreate({where: {username: req.body.username}})
      // findOrCreate returns multiple resutls in an array
      // use spread to assign the array to function arguments
      .spread(function(username) {
        res.end(username);
      });
    } 
  }
};
