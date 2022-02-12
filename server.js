const express = require('express');
const app = express()

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //ejs 엔진 사용
app.engine('html', require('ejs').renderFile);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.render('index.html');
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/about', function(req, res) {
    res.render('about.html')
  });

  var mysql = require('mysql');
  var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'example.org',
    user            : 'bob',
    password        : 'secret',
    database        : 'my_db'
  });


// respond with "hello world" when a GET request is made to the homepage
app.get('/db', function(req, res) {
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT something FROM sometable', function (error, results, fields) {
            
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
  });