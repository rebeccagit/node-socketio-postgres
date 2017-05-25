const express = require('express');
const movieRouter = express.Router();
const pg = require('pg'); 
const db = require("../../config/datab");


movieRouter.get('/', function(req, res) {
     		
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<!DOCTYPE><html><head><title>Movie Reviews</title><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>body {font: 16px verdana;}#top{margin-left:10%;margin-right:10%;margin-top:10%;margin-bottom:5%;padding:0px;}#rev{margin:15%;margin-top:5%;padding:0px;}h3 {color:red;font: 14px Helvetica, Arial, sans-serif;} h3{color:red;} .moviebutton { width:30px; padding:10px; margin:10px; } a {padding:5px; }</style>");
	
	res.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script><script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script><link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" /><link rel="stylesheet" type="text/css" href="/stylesheets/main.css" /><meta name="viewport" content="width=device-width, initial-scale=1.0">');

	res.write('<nav class="navbar navbar-default navbar-static-top navbar-inverse"><div class="container"><ul class="nav navbar-nav"><li class="active"><a href="/"><span class="glyphicon glyphicon-home"></span> Home</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/chat"><span class="glyphicon glyphicon-grain"></span> Mad Hatters Chat Room</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/makingsite"><span class="glyphicon glyphicon-grain"></span> About Making This Site</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/aboutme"><span class="glyphicon glyphicon-grain"></span> About Me</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/moviereview"><span class="glyphicon glyphicon-grain"></span> Movie Reviews</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-list-alt"></span> More Sites<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/">Call Back Functions in Javascript</a></li><li><a href="http://www.codewars.com">Codewars - Fun Coding!</a></li><li><a href="http://www.theanimalrescuesite.com/clickToGive/ars/home">The Animal Rescue Site</a></li><li class="divider"></li><li><a href="http://octoberdays.pythonanywhere.com/">My Django Based Site - Poems!</a></li><li><a href="aceprogrammers.com/demoscapes/">Demo site!</a></li><li><a href="http://www.thigpensdesignlandscaping.com/">Site I Built, Small Business!</a></li><li><a href="http://tggardens.com/">Site I Built, Small Business!</a></li><li><a href="http://playgroundsandmore.com/">Site I Built, Small Business!</a></li><li class="divider"></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs">Start with Node on Heroku</a></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-php">Start with PHP on Heroku</a></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-python">Start with Python on Heroku</a></li></ul></li></ul></div></nav>');
	
	res.write("<div id='top'>")
	res.write("<h1><a href='moviereview'>My Movie Reviews</a>" + "<br /></h1>");
	res.write("<p>The following are some reviews.</p>");
	res.write("</div>");
	res.write("<div id='rev'>");
	res.write("Select reviews: <br><a href='moviereview/A'>A</a><a href='moviereview/B'>B</a><a href='moviereview/C'>C</a><a href='moviereview/D'>D</a><a href='moviereview/E'>E</a><a href='moviereview/F'>F</a><a href='moviereview/G'>G</a><a href='moviereview/H'>H</a><br><a href='moviereview/I'>I</a><a href='moviereview/J'>J</a><a href='moviereview/K'>K</a><a href='moviereview/L'>L</a><a href='moviereview/M'>M</a><a href='moviereview/N'>N</a><a href='moviereview/O'>O</a><a href='moviereview/P'>P</a><br><a href='moviereview/Q'>Q</a><a href='moviereview/R'>R</a><a href='moviereview/S'>S</a><a href='moviereview/T'>T</a><a href='moviereview/U'>U</a><a href='moviereview/V'>V</a><a href='moviereview/W'>W</a><a href='moviereview/X'>X</a><br><a href='moviereview/Y'>Y</a><a href='moviereview/Z'>Z</a>");
	res.write("<br /><br /><br /><br />");
	
	let query = db.query("SELECT name, rating, year, genre, director, actors, review, video FROM moviereviewz ORDER BY random() LIMIT 2");	
	res.write("<ul>");
		query.on('row', function(row) {
			res.write("<li style='list-style-type:none;'>");		
			res.write("<h3 style='color:#4d004d;'>" + String(row.name) + "&nbsp;&nbsp;=>&nbsp;&nbsp;" + String(row.rating) + "<span class='glyphicon glyphicon-star-empty'></span></h3><br />");
			res.write("Release Year: " + String(row.year) + "<br /><br />");
			res.write("Genre: " + String(row.genre) + "<br /><br />");			
			res.write("Directed By: " + String(row.director) + "<br /><br />");
			res.write("Cast: " + String(row.actors) + "<br /><br />");
			res.write("My Review: <br /><br />" + String(row.review) + "<br /><br />");
			res.write("<div class='embed-responsive embed-responsive-16by9'>")
			res.write("<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/" + String(row.video) + "' allowfullscreen></iframe>");
			res.write("</div>");
			res.write("<br /><br /><br /><br />");			
			res.write("</li>");
			
		/*	WIP
			if (err) {
				console.error(err);
				res.statusCode = 500;
				return res.json({ errors: ['Could not retrieve.'] });
			}
	   
			if (results.rows.length === 0) {
		  // We are able to set the HTTP status code on the res object
				res.statusCode = 404;
				return res.json({ errors: ['Not found'] });
			}		
		*/
		
		});		
		query.on('end', function () {
			res.write("</ul>");
			res.write("I hope you enjoyed the reviews. I update frequently, though not consistently. Sometimes there is nothing to see at the movies. Sometimes, I don't have the time.<br /><br /><br /></div>");			
			res.write("<br /><br /><br /></div>");
			res.write("</body></html>");
		});	
});


movieRouter.get('/:id', function(req, res) {
	
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<!DOCTYPE><html><head><title>Movie Reviews</title><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>body {font: 16px verdana;}#top{margin-left:10%;margin-right:10%;margin-top:10%;margin-bottom:5%;padding:0px;}#rev{margin:15%;margin-top:5%;padding:0px;}h3 {color:red;font: 14px Helvetica, Arial, sans-serif;} h3{color:red;} .moviebutton { width:30px; padding:10px; margin:10px; } a {padding:5px; }</style>");
	
	res.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script><script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script><link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" /><link rel="stylesheet" type="text/css" href="/stylesheets/main.css" /><meta name="viewport" content="width=device-width, initial-scale=1.0">');

	res.write('<nav class="navbar navbar-default navbar-static-top navbar-inverse"><div class="container"><ul class="nav navbar-nav"><li class="active"><a href="/"><span class="glyphicon glyphicon-home"></span> Home</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/chat"><span class="glyphicon glyphicon-grain"></span> Mad Hatters Chat Room</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/makingsite"><span class="glyphicon glyphicon-grain"></span> About Making This Site</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/aboutme"><span class="glyphicon glyphicon-grain"></span> About Me</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/moviereview"><span class="glyphicon glyphicon-grain"></span> Movie Reviews</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-list-alt"></span> More Sites<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/">Call Back Functions in Javascript</a></li><li><a href="http://www.codewars.com">Codewars - Fun Coding!</a></li><li><a href="http://www.theanimalrescuesite.com/clickToGive/ars/home">The Animal Rescue Site</a></li><li class="divider"></li><li><a href="http://octoberdays.pythonanywhere.com/">My Django Based Site - Poems!</a></li><li><a href="http://aceprogrammers.com/demoscapes">Demo site!</a></li><li><a href="http://www.thigpensdesignlandscaping.com/">Site I Built, Small Business!</a></li><li><a href="http://tggardens.com/">Site I Built, Small Business!</a></li><li><a href="http://playgroundsandmore.com/">Site I Built, Small Business!</a></li><li class="divider"></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs">Start with Node on Heroku</a></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-php">Start with PHP on Heroku</a></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-python">Start with Python on Heroku</a></li></ul></li></ul></div></nav>');
	
	res.write("<div id='top'>")
	res.write("<h1><a href='moviereview'>My Movie Reviews</a>" + "<br /></h1>");
	res.write("<p>The following are some reviews.</p>");
	res.write("</div>");
	res.write("<div id='rev'>");
	res.write("Select reviews: <br><a href='A'>A</a><a href='B'>B</a><a href='C'>C</a><a href='D'>D</a><a href='E'>E</a><a href='F'>F</a><a href='G'>G</a><a href='H'>H</a><br><a href='I'>I</a><a href='J'>J</a><a href='K'>K</a><a href='L'>L</a><a href='M'>M</a><a href='N'>N</a><a href='O'>O</a><a href='P'>P</a><br><a href='Q'>Q</a><a href='R'>R</a><a href='S'>S</a><a href='T'>T</a><a href='U'>U</a><a href='V'>V</a><a href='W'>W</a><a href='X'>X</a><br><a href='Y'>Y</a><a href='Z'>Z</a>");
	res.write("<br /><br /><br /><br />");
	
	let photoId = req.params.id;
	//res.write(photoId);

    let sql = "SELECT name, rating, year, genre, director, actors, review, video FROM moviereviewz WHERE alpha = $1";	
    let query = db.query(sql, [ photoId ]);
	
		res.write("<ul>");
		query.on('row', function(row) {
			
			res.write("<li style='list-style-type:none;'>");		
			res.write("<h3 style='color:#4d004d;'>" + String(row.name) + "&nbsp;&nbsp;=>&nbsp;&nbsp;" + String(row.rating) + "<span class='glyphicon glyphicon-star-empty'></span></h3><br />");
			res.write("Release Year: " + String(row.year) + "<br /><br />");
			res.write("Genre: " + String(row.genre) + "<br /><br />");			
			res.write("Directed By: " + String(row.director) + "<br /><br />");
			res.write("Cast: " + String(row.actors) + "<br /><br />");
			res.write("My Review: <br /><br />" + String(row.review) + "<br /><br />");
			res.write("<div class='embed-responsive embed-responsive-16by9'>")
			res.write("<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/" + String(row.video) + "' allowfullscreen></iframe>");
			res.write("</div>");
	
			res.write("</li>");
			
		/*	WIP
			if (err) {
				console.error(err);
				res.statusCode = 500;
				return res.json({ errors: ['Could not retrieve.'] });
			}
	   
			if (results.rows.length === 0) {
		  // We are able to set the HTTP status code on the res object
				res.statusCode = 404;
				return res.json({ errors: ['Not found'] });
			}		
		*/
		
			});		
			
		query.on('end', function () {
			res.write("</ul></div>");
			res.write("</body></html>");
			photoId = "";
		});	
});


module.exports = movieRouter;