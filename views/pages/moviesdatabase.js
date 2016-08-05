var express = require('express');
var router = express.Router();
var pg = require('pg');

router.get('/', function(req, res) {
     
    var db = new pg.Client(process.env.DB_URL);
	db.connect();
	
	
	//Need to separate html and css from this page...
	res.writeHead(200, {"Content-Type": "text/html"});
	
	
	//beginning of page and style css
	res.write("<!DOCTYPE><html><head><title>Movie Reviews</title><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>body {font: 16px verdana;}#top{margin-left:10%;margin-right:10%;margin-top:10%;margin-bottom:5%;padding:0px;}#rev{margin:15%;margin-top:5%;padding:0px;}h3 {color:red;font: 14px Helvetica, Arial, sans-serif;} h3{color:red;}</style>");
	
	
	//scripts for web page
	res.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script><script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script><link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" /><link rel="stylesheet" type="text/css" href="/stylesheets/main.css" /><meta name="viewport" content="width=device-width, initial-scale=1.0">');

	
	//menu bar and collapsable menu
	res.write('<nav class="navbar navbar-default navbar-static-top navbar-inverse"><div class="container"><ul class="nav navbar-nav"><li class="active"><a href="/"><span class="glyphicon glyphicon-home"></span> Home</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/chat"><span class="glyphicon glyphicon-grain"></span> Mad Hatters Chat Room</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/makingsite"><span class="glyphicon glyphicon-grain"></span> About Making This Site</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/aboutme"><span class="glyphicon glyphicon-grain"></span> About Me</a></li><li><a href="https://secure-inlet-7727.herokuapp.com/moviereviews"><span class="glyphicon glyphicon-grain"></span> Movie Reviews</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-list-alt"></span> More Sites<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/">Call Back Functions in Javascript</a></li><li><a href="http://www.codewars.com">Codewars - Fun Coding!</a></li><li><a href="http://www.theanimalrescuesite.com/clickToGive/ars/home">The Animal Rescue Site</a></li><li class="divider"></li><li><a href="http://www.thigpensdesignlandscaping.com/">Site I Built, Small Business!</a></li><li><a href="http://southtexasdustcontrol.com/">Site I Built, Small Business!</a></li><li><a href="http://tggardens.com/">Site I Built, Small Business!</a></li><li><a href="http://playgroundsandmore.com/">Site I Built, Small Business!</a></li><li><a href="http://octoberdays.pythonanywhere.com/">My Django Based Site - Poems!</a></li><li class="divider"></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs">Start with Node on Heroku</a></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-php">Start with PHP on Heroku</a></li><li><a href="https://devcenter.heroku.com/articles/getting-started-with-python">Start with Python on Heroku</a></li></ul></li></ul></div></nav>');
	
	
	res.write("<div id='top'>")
	res.write("<h1>My Movie Reviews.  No standards, only my opinion!  Alphabetical order." + "<br /></h1>");
	res.write("<h2>Let me know if you want to add a review of your own!" + "<br /><br /><br /></h2>");
	res.write("</div>");
	res.write("<div id='rev'>");
		   
		   
    var results = [];
    var i = 0;
	var query = db.query("SELECT * FROM moviereviewz ORDER BY name ASC");
	//practice query - nope
	//var query = db.query("SELECT random();");

	res.write("<ul>");
		query.on('row', function(row) {
			console.log(row.name);
			i++;
			res.write("<li style='list-style-type:none;'>");
			res.write("<h3 style='color:#4d004d;'>" + String(row.name) + "&nbsp;&nbsp;=>&nbsp;&nbsp;" + String(row.rating) + "<span class='glyphicon glyphicon-star-empty'></span></h3><br />");
			res.write("Directed by " + String(row.director) + "<br /><br />");
			res.write("Cast: " + String(row.actors) + "<br /><br />");
			res.write(String(row.review) + "<br /><br />");
			res.write("<div class='embed-responsive embed-responsive-16by9'>")
			res.write("<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/" + String(row.video) + "' allowfullscreen></iframe><br /><br /><br /><br /><br /><br />");
			res.write("</div>")
			res.write("</li>");
			//res.end(); using this would be redundant and extra work ;p
		});		
		query.on('end', function () {
			res.write("</ul>");
			res.write("Hope you enjoyed!  Number of reviews = " + i + "!");
			res.write("<br /><br /><br /></div>");
			res.write("</body></html>");

		});
});

// middleware that is specific to this router - here for my own practice and reference
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route - here for my own practice and reference
router.get('/about', function(req, res) {
    res.send('Birds home page. A hidden page! Squeee!!');
});

module.exports = router;