const express = require('express');
const photoRouter = express.Router(); 

module.exports = function(app) {
	

	//main pages
	app.get('/', function(request, response) {
	  response.render('pages/index');
	});
	app.get('/aboutme', function(request, response) {
	  response.render('pages/aboutme');
	});
	app.get('/makingsite', function(request, response) {
	  response.render('pages/makingsite');
	});
	app.get('/chat', function(request, response) {
	  response.render('pages/chat');
	});
	var moviesdatabase = require('../views/pages/moviesdatabase');
	app.use('/moviereviews', moviesdatabase);


	//practice movie page - old page
	//var moviesdatabases = require('../views/pages/movies');
	//app.use('/moviepage', moviesdatabases);


	//animations
	app.get('/animations', function(request, response) {
	  response.render('pages/animations/animations');
	});
	app.get('/animations2', function(request, response) {
	  response.render('pages/animations/animations2');
	});
	app.get('/animations3', function(request, response) {
	  response.render('pages/animations/animations3');
	});
	app.get('/animations4', function(request, response) {
	  response.render('pages/animations/animations4');
	});
	app.get('/animations5', function(request, response) {
	  response.render('pages/animations/animations5');
	});
	app.get('/animations6', function(request, response) {
	  response.render('pages/animations/animations6');
	});
	app.get('/animations7', function(request, response) {
	  response.render('pages/animations/animations7');
	});
	app.get('/animations8', function(request, response) {
	  response.render('pages/animations/animations8');
	});
	app.get('/animations8b', function(request, response) {
	  response.render('pages/animations/animations8b');
	});
	app.get('/animations10', function(request, response) {
	  response.render('pages/animations/animations10');
	});
	app.get('/animations11', function(request, response) {
	  response.render('pages/animations/animations11');
	});
	app.get('/animations12', function(request, response) {
	  response.render('pages/animations/animations12');
	});
	app.get('/animations12b', function(request, response) {
	  response.render('pages/animations/animations12b');
	});
	app.get('/animations13', function(request, response) {
	  response.render('pages/animations/animations9');
	});
	app.get('/og7', function(request, response) {
	  response.render('pages/animations/og7');
	});
	app.get('/og8', function(request, response) {
	  response.render('pages/animations/og8');
	});
	app.get('/og9', function(request, response) {
	  response.render('pages/animations/og9');
	});
	app.get('/experimental', function(request, response) {
	  response.render('pages/animations/experimental');
	});
	app.get('/funstuff', function(request, response) {
	  response.render('pages/funstuff');
	});
	app.get('/prac', function(request, response) {
	  response.render('pages/prac');
	});


	//database pages alphabetized


	// practice grid page
	//app.get('/data.json', function(request, response) {
	// response.render('myscripts\jgrid\js\data.json');
	//});
	
	
/* function lookupPhoto(req, res) {
  // We access the ID param on the request object
  var photoId = req.params.id;
  // Build an SQL query to select the resource object by ID
  var sql = 'SELECT name FROM moviereviewz WHERE year = ?';
  var results = db.query(sql, [ photoId ]);
  
     
 results.on('rows', function(row) {

			res.send("Release Year: " + String(rows.name) + "<br /><br />");

		});		

	if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: ['Could not retrieve photo'] });
    }
    // No results returned mean the object is not found
    if (results.rows.length === 0) {
      // We are able to set the HTTP status code on the res object
      res.statusCode = 404;
      return res.json({ errors: ['Photo not found'] });
    }
	
    // By attaching a Photo property to the request
    // Its data is now made available in our handler function
res.send( photoId );
}
var photoRouter = express.Router();
photoRouter.get('/', function(req, res) { 
	res.send('hello');
});
photoRouter.get('/:id', lookupPhoto, function(req, res) {
  res.json(req.name);
})
*/

	
var moviesRouter = require('../views/pages/moviestemplate');
app.use('/moviereview', moviesRouter);	

};