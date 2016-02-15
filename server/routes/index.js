var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connectionString = "postgres://ounefajfybheww:e4Wir2p51_lNHwzRYxLdPX54rC@ec2-54-83-199-54.compute-1.amazonaws.com:5432/dbt8cnjfb1iggg"


router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', '../', 'views', 'pages', 'db.ejs'));
});


router.get('/api/v1/todos', function(req, res) {

    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM moviereview ORDER BY name");

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });

    });

});

module.exports = router;