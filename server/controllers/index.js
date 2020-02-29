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
      models.messages.get(function(err, result) {
        if (err) {
          console.log('Error getting message -->', err);
        } else {
          // var response = {result: result};
          // console.log('this is the get response--->', response); // {result: [] } --> means get request going thru, but no database info passed in!
          // console.log('this is the response--->', result) //array with results from db
          res.json(result);
        }
      });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      console.log('reaching the post request in controller');
      var body = JSON.stringify(body);
      models.messages.post(body, function(err) {
        if (err) {
          console.log('Error posting message -->', err);
        } else {
          res.end(result);
        }
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, result) {
        if (err) {
          console.log('Error getting user -->', err);
        } else {
          res.writeHead(200, headers);
          res.end(result);
        }
      });
    },
    post: function (req, res) {
      var body = JSON.stringify(req.body);
      models.users.post(body, function(err) {
        if (err) {
          console.log('Error posting username -->', err);
        } else {
          res.writeHead(201, headers);
          res.end('201');
        }
      });
    }
  }
};

