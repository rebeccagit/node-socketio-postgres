	var express = require('express');
	var router = express.Router();
	var pg = require('pg');	

router.get('/', function(req, res) {
     
    var db = new pg.Client(process.env.DB_URL);
	db.connect();
	
	
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<!DOCTYPE><html><head><title>Movie Reviews</title><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>body {font: 16px verdana;}#top{margin-left:10%;margin-right:10%;margin-top:10%;margin-bottom:5%;padding:0px;}#rev{margin:15%;margin-top:5%;padding:0px;}h3 {color:red;font: 14px Helvetica, Arial, sans-serif;} h3{color:red;} .moviebutton { width:30px; padding:10px; margin:10px; }</style>");

	
	res.write("<button class='moviebutton'><a href='movieA'>A</a></button><button class='moviebutton'><a href='movieB'>B</a></button><button class='moviebutton'><a href='movieC'>C</a></button><button class='moviebutton'><a href='movieD'>D</a></button><button class='moviebutton'><a href='movieE'>E</a></button><button class='moviebutton'><a href='movieF'>F</a></button><button class='moviebutton'><a href='movieG'>G</a></button><button class='moviebutton'><a href='movieH'>H</a></button><button class='moviebutton'><a href='movieI'>I</a></button><button class='moviebutton'><a href='movieJ'>J</a></button><button class='moviebutton'><a href='movieK'>K</a></button><button class='moviebutton'><a href='movieL'>L</a></button><button class='moviebutton'><a href='movieM'>M</a></button><button class='moviebutton'><a href='movieN'>N</a></button><button class='moviebutton'><a href='movieO'>O</a></button><button class='moviebutton'><a href='movieP'>P</a></button><button class='moviebutton'><a href='movieQ'>Q</a></button><button class='moviebutton'><a href='movieR'>R</a></button><button class='moviebutton'><a href='movieS'>S</a></button><button class='moviebutton'><a href='movieT'>T</a></button><button class='moviebutton'><a href='movieU'>U</a></button><button class='moviebutton'><a href='movieV'>V</a></button><button class='moviebutton'><a href='movieW'>W</a></button><button class='moviebutton'><a href='movieX'>X</a></button><button class='moviebutton'><a href='movieY'>Y</a></button><button class='moviebutton'><a href='movieZ'>Z</a></button>");
	res.write("<br /><br /><br /><br />");
	
		
	//var rows = [];	
    var i = 0;
	var query = db.query("SELECT name, rating, year, genre, director, actors, review, video FROM moviereviewz ORDER BY random() LIMIT 3");	
	res.write("<ul>");
		query.on('row', function(row) {
			console.log(row.name);
		//	rows.push(row);
			i++; 
			res.write("<li style='list-style-type:none;'>");		
			res.write("<h3 style='color:#4d004d;'>" + String(row.name) + "&nbsp;&nbsp;=>&nbsp;&nbsp;" + String(row.rating) + "<span class='glyphicon glyphicon-star-empty'></span></h3><br />");
			res.write("Release Year: " + String(row.year) + "<br /><br />");
			res.write("Genre: " + String(row.genre) + "<br /><br />");			
			res.write("Directed By: " + String(row.director) + "<br /><br />");
			res.write("Cast: " + String(row.actors) + "<br /><br />");
			res.write("My Review: <br /><br />" + String(row.review) + "<br /><br />");
			res.write("<div class='embed-responsive embed-responsive-16by9'>")
			res.write("<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/" + String(row.video) + "' allowfullscreen></iframe>");
			res.write("</div>")
			res.write("<br /><br /><br /><br />");			
			res.write("</li>");
		//	console.log(rows.name);
		});		
		query.on('end', function () {
			res.write("</ul>");
			res.write("Number of reviews = " + i + "!<br />");
			res.write("Number of future pages = " + i/10 + "!");
			res.write("<br /><br /></div></div></body></html>");
		});
});

module.exports = router;