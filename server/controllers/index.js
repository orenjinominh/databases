var models = require('../models/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('this is the request--->', req);
      console.log('reaching the get request in controller');
      // console.log('this is the req.body--->', req.body) // an empty object {}
      // var dataToGet = models.messages.get();
      // console.log('message data here -->', dataToGet); // returns undefined 
      // res.send(dataToGet);
      models.messages.get(function(err, results) {
        if (err) {
          console.log('Error getting message -->', err);
        } else {
          // var response = {result: result};
          // console.log('this is the get response--->', response); // {result: [] } --> means get request going thru, but no database info passed in!
          // console.log('this is the response--->', result) //array with results from db
          res.json(results);
        }
      });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      console.log('reaching the mesages.post request in controller');
      console.log('this is the req.body for messages.post', req.body);
      var body = req.body; //giving object with keys 
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(body, function(err, results) {
        if (err) {
          console.log('Error posting message -->', err);
        } else {
          console.log('Message was posted!');
          results = JSON.stringify(results);
          console.log('results is here--->', results);
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

