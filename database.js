function maindb(db){

var results = [];

response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("My Movie Reviews.  I promise to be unfair, biased and have my own unpredictable, yet unchaotic, standards!" + "\n\n\n");
	var i = 0;
	var query = db.query("SELECT * FROM moviereview");
		
		query.on('row', function(row) {
			console.log(row.name);
			i++;
			response.write(String(row.name + row.rating + "   " + row.review) + "\n");
		});
		query.on('end', function () {
			response.write("\nHope you enjoyed!  Number of reviews =" + i + "!");
			
			response.end();
		});
};

module.exports = maindb;