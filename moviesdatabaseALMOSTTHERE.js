var express = require('express');
var router = express.Router();
var pg = require('pg');



router.get('/', function(req, res) {
     
    var db = new pg.Client(process.env.DB_URL);
	db.connect();
	
	var obj = "";	   
    var results = [];
    var i = 0;
	var tagline = "Any code of your own that you haven't looked at for six or more months..."
	var query = db.query("SELECT * FROM moviereview ORDER BY -rating");

		query.on('row', function(row) {
				//console.log(row.name + row.rating);
				results += row;
				i++;
				//console.log(row);
				//console.log(results);  
				
		});		
		query.on('end', function () {
				//console.log(results);
				//console.log( JSON.stringify( results ) );
				res.render('pages/moviereviews', { items: results }); 
		});
		
		
});

// middleware that is specific to this router - here for practice and reference
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route - here for practice and reference
router.get('/about', function(req, res) {
    res.send('Birds home page. A hidden page! Squeee!!');
});

module.exports = router;