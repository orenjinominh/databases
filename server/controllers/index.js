var models = require('../models/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('reaching the get request in controller');
      models.messages.get(function(err, results) {
        if (err) {
          console.log('Error getting message -->', err);
        } else {
          res.json(results);
        }
      });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      var body = req.body; //giving object with keys 
      models.messages.post(body, function(err, results) {
        if (err) {
          console.log('Error posting message -->', err);
        } else {
          console.log('Message was posted!');
          results = JSON.stringify(results);
          res.end(results);
        }
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log('Error getting user -->', err);
        } else {
          res.end(results);
        }
      });
    },
    post: function (req, res) {
      console.log('reaching the users post request in controller');
      var usernameData = req.body;
      models.users.post(usernameData, function(err, results) {
        if (err) {
          console.log('Error posting username -->', err);
        } else {
          results = JSON.stringify(results);
          res.end(results);
        }
      });
    }
  }
};

