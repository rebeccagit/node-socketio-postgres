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


// practice grid page
//app.get('/data.json', function(request, response) {
// response.render('myscripts\jgrid\js\data.json');
//});


};