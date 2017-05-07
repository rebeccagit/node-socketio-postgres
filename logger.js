const winston = require('winston');
winston.emitErrs = true;
//const tsFormat = () => (new Date()).toLocaleTimeString();

const logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'debug',
            filename: 'log/log.log',
            handleExceptions: true,
            json: true,
			prettyPrint: true,
            maxsize: 1242880, 
            maxFiles: 1,
            colorize: false,
			showLevel: true
//			timestamp: tsFormat,
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: false
        })
    ],
	exceptionHandlers: [
      new winston.transports.File({ filename: 'log/exceptions.log' })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};