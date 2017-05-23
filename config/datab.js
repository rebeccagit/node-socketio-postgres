const pg = require('pg');		
const logger = require("../logger");
	
	const db = new pg.Client(process.env.DB_URL);	
	db.connect();
	//	setTimeout(db.end(), 5000);
	logger.debug("DB enabled");

module.exports = db;