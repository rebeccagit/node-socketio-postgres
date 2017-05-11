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


//practice movie page
var moviesdatabases = require('../views/pages/movies');
app.use('/moviepage', moviesdatabases);


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
var mova = require('../views/pages/movietitle/moviesA');
app.use('/movieA', mova);

var movb = require('../views/pages/movietitle/moviesB');
app.use('/movieB', movb);

var movc = require('../views/pages/movietitle/moviesC');
app.use('/movieC', movc);

var movd = require('../views/pages/movietitle/moviesD');
app.use('/movieD', movd);

var move = require('../views/pages/movietitle/moviesE');
app.use('/movieE', move);

var movf = require('../views/pages/movietitle/moviesF');
app.use('/movieF', movf);

var movg = require('../views/pages/movietitle/moviesG');
app.use('/movieG', movg);

var movh = require('../views/pages/movietitle/moviesH');
app.use('/movieH', movh);

var movi = require('../views/pages/movietitle/moviesI');
app.use('/movieI', movi);

var movj = require('../views/pages/movietitle/moviesJ');
app.use('/movieJ', movj);

var movk = require('../views/pages/movietitle/moviesK');
app.use('/movieK', movk);

var movl = require('../views/pages/movietitle/moviesL');
app.use('/movieL', movl);

var movm = require('../views/pages/movietitle/moviesM');
app.use('/movieM', movm);

var movn = require('../views/pages/movietitle/moviesN');
app.use('/movieN', movn);

var movo = require('../views/pages/movietitle/moviesO');
app.use('/movieO', movo);

var movp = require('../views/pages/movietitle/moviesP');
app.use('/movieP', movp);

var movq = require('../views/pages/movietitle/moviesQ');
app.use('/movieQ', movq);

var movr = require('../views/pages/movietitle/moviesR');
app.use('/movieR', movr);

var movs = require('../views/pages/movietitle/moviesS');
app.use('/movieS', movs);

var movt = require('../views/pages/movietitle/moviesT');
app.use('/movieT', movt);

var movu = require('../views/pages/movietitle/moviesU');
app.use('/movieU', movu);

var movv = require('../views/pages/movietitle/moviesV');
app.use('/movieV', movv);

var movw = require('../views/pages/movietitle/moviesW');
app.use('/movieW', movw);

var movx = require('../views/pages/movietitle/moviesX');
app.use('/movieX', movx);

var movy = require('../views/pages/movietitle/moviesY');
app.use('/movieY', movy);

var movz = require('../views/pages/movietitle/moviesZ');
app.use('/movieZ', movz);


// practice grid page
//app.get('/data.json', function(request, response) {
// response.render('myscripts\jgrid\js\data.json');
//});


};