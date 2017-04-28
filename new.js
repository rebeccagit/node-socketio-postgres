const winston = require('winston');

winston.configure({
    transports: [
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
  });

winston.log('info', 'Hello log files!', {  
  someKey: 'some-value'
}) 