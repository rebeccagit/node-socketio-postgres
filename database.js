//My original, old, database that was the first to work :)

//var connection = {
//  host: 'ec2-54-83-199-54.compute-1.amazonaws.com', // server name or IP address;
//  port: 5432,
//  database: 'dbt8cnjfb1iggg',
//  user: 'ounefajfybheww',
//  password: 'e4Wir2p51_lNHwzRYxLdPX54rC'
//};

//var maindb = require('database');//delete this

	var DB_URL = "postgres://ounefajfybheww:e4Wir2p51_lNHwzRYxLdPX54rC@ec2-54-83-199-54.compute-1.amazonaws.com:5432/dbt8cnjfb1iggg"//WTF

    var db = new pg.Client(DB_URL);
	

app.get('/db', function(request,response) {
	//response.render('pages/db');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<!DOCTYPE><html><head><title>Movie Reviews</title><style>body {font: 16px verdana;}#top{margin-left:10%;margin-right:10%;margin-top:10%;margin-bottom:5%;padding:0px;}#rev{margin:15%;margin-top:5%;padding:0px;}h3 {color:red;font: 14px Helvetica, Arial, sans-serif;}</style></head><body>");
	response.write("<div id='top'>")
	response.write("<h1>My Movie Reviews.  I promise to be unfair, biased and have my own unpredictable, yet unchaotic, standards!" + "<br /></h1>");
	response.write("<h2>I'm learning to use Postgres with Node.js so this is a WIP! Please judge accordingly, mateys!" + "<br /><br /><br /></h2>");
	response.write("</div>");
	response.write("<div id='rev'>");
		
    db.connect();

    var results = [];
	var i = 0;
	var query = db.query("SELECT * FROM moviereview ORDER BY name");
		response.write("<ul>");
		query.on('row', function(row) {
			console.log(row.name);
			i++;
			response.write("<li style='list-style-type:none;'>");
			response.write("<h3>" + String(row.name) + "&nbsp;&nbsp;==&nbsp;&nbsp;" + String(row.rating) + "</h3><br />");
			response.write(String(row.review) + "<br /><br /><br />");
			response.write("</li>");
		});
		
		query.on('end', function () {
			response.write("</ul>");
			response.write("Hope you enjoyed!  Number of reviews =" + i + "!");
			response.write("</div>");
			response.write("</body></html>");
			response.end();
		});
});
