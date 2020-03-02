var mysql = require('mysql');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

// tests connection to db
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// define tables 
User = db.define('usernames', {
  username: Sequelize.STRING
});

Message = db.define('messages', {
  messageText: Sequelize.STRING,
  roomname: Sequelize.STRING
});

// set up associations
// User.hasMany(Message);
// Message.belongsTo(User);

User.sync();
Message.sync();

// not sure if necessary...
exports.db = db;
exports.Sequelize = Sequelize;
exports.User = User;
exports.Messages = Message;


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

/* PRE-ORM-REFACTOR CODE
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection; */
