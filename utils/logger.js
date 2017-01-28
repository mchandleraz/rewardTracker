const Logger = require('bunyan');

function Log(serializers) {
	return new Logger({
	  name: 'helloapi',
	  streams: [
	    {
	      stream: process.stdout,
	      level: 'debug'
	    },
	    {
	      path: 'hello.log',
	      level: 'trace'
	    }
	  ],
	  serializers
	});
}

module.exports = Log;