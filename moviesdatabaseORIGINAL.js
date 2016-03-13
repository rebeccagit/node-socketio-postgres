var express = require('express');
var router = express.Router();
var pg = require('pg');

router.get('/', function(req, res) {
     
    var db = new pg.Client(process.env.DB_URL);
	db.connect();
	
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<!DOCTYPE><html><head><title>Movie Reviews</title><style>body {font: 16px verdana;}#top{margin-left:10%;margin-right:10%;margin-top:10%;margin-bottom:5%;padding:0px;}#rev{margin:15%;margin-top:5%;padding:0px;}h3 {color:red;font: 14px Helvetica, Arial, sans-serif;}</style></head><body>");
	res.write("<div id='top'>")
	res.write("<h1>My Movie Reviews.  I promise to be unfair, biased and have my own unpredictable, yet unchaotic, standards!" + "<br /></h1>");
	res.write("<h2>I'm learning to use Postgres with Node.js so this is a WIP! Constructive criticism is very welcomed!" + "<br /><br /><br /></h2>");
	res.write("</div>");
	res.write("<div id='rev'>");
		   
    var results = [];
    var i = 0;
	var query = db.query("SELECT * FROM moviereview ORDER BY -rating");

	res.write("<ul>");
		query.on('row', function(row) {
			console.log(row.name);
			i++;
			res.write("<li style='list-style-type:none;'>");
			res.write("<h3>" + String(row.name) + "&nbsp;&nbsp;==&nbsp;&nbsp;" + String(row.rating) + "</h3><br />");
			res.write(String(row.review) + "<br /><br /><br />");
			res.write("</li>");
		});		
		query.on('end', function () {
			res.write("</ul>");
			res.write("Hope you enjoyed!  Number of reviews =" + i + "!");
			res.write("</div>");
			res.write("</body></html>");
			res.end();
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