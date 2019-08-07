var mysql = require('mysql');

// //local mysql db connection
// var connection = mysql.createConnection({
//     host     : 'heroku_e33b4e79e270bb3',
//     user     : 'b8e4369abbd8d9',
//     password : 'fa7df067',
//     database : 'heroku_e33b4e79e270bb3'
// });

// connection.connect();

// module.exports = connection;

//b7e6a2dd8de74c:31d13153@us-cdbr-iron-east-02.cleardb.net/heroku_e8a72f097c2074a?reconnect=true
mysql: // var connection = mysql.createConnection({
//     // host     : 'localhost',
//     // user     : 'root',
//     // password : 'root123456',
//     // database : 'revelsoft_havana'
//     // connectionLimit : 100,
//     // host     : 'us-cdbr-iron-east-02.cleardb.net',
//     // user     : 'b7e6a2dd8de74c',
//     // password : '31d13153',
//     // database : 'heroku_e8a72f097c2074a',
//     // debug : 'false'
//     host     : 'us-cdbr-iron-east-02.cleardb.net',
//     user     : '',
//     password : '',
//     database : '',
// });
// var connection = mysql.createConnection(
//   "mysql://b7e6a2dd8de74c:31d13153@us-cdbr-iron-east-02.cleardb.net/heroku_e8a72f097c2074a?reconnect=true"
// );


var db_config = {
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b7e6a2dd8de74c',
  password: '31d13153',
  database: 'heroku_e8a72f097c2074a'
};

var connection;

function handleDisconnect() {
  console.log('1. connecting to db:');
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                        // the old one cannot be reused.

  connection.connect(function(err) {              	// The server is either down
      if (err) {                                     // or restarting (takes a while sometimes).
          console.log('2. error when connecting to db:', err);
          setTimeout(handleDisconnect, 1000); // We introduce a delay before attempting to reconnect,
      }                                     	// to avoid a hot loop, and to allow our node script to
  });                                     	// process asynchronous requests in the meantime.
                        // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
      console.log('3. db error', err);
      if (err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR' || err.code === 'PROTOCOL_CONNECTION_LOST') { 	// Connection to the MySQL server is usually
          handleDisconnect();                      	// lost due to either server restart, or a
      } else {                                      	// connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
      }
  });
}

handleDisconnect();


module.exports = connection;
