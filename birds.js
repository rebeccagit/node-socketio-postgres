var express = require('express');
var router = express.Router();
var pg = require('pg');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
    //var DB_URL = "postgres://ounefajfybheww:e4Wir2p51_lNHwzRYxLdPX54rC@ec2-54-83-199-54.compute-1.amazonaws.com:5432/dbt8cnjfb1iggg"//WTF

    var db = new pg.Client(process.env.DB_URL);

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<!DOCTYPE><html><head><title>Movie Reviews</title><style>body {font: 16px verdana;}#top{margin-left:10%;margin-right:10%;margin-top:10%;margin-bottom:5%;padding:0px;}#rev{margin:15%;margin-top:5%;padding:0px;}h3 {color:red;font: 14px Helvetica, Arial, sans-serif;}</style></head><body>");
	res.write("<div id='top'>")
	res.write("<h1>My Movie Reviews.  I promise to be unfair, biased and have my own unpredictable, yet unchaotic, standards!" + "<br /></h1>");
	res.write("<h2>I'm learning to use Postgres with Node.js so this is a WIP! Please judge accordingly, mateys!" + "<br /><br /><br /></h2>");
	res.write("</div>");
	res.write("<div id='rev'>");
		
    db.connect();

    var results = [];
	var i = 0;
	var query = db.query("SELECT * FROM moviereview ORDER BY name");
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

module.exports = router;