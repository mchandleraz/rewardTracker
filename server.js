const restify = require('restify');
const Logger = require('bunyan');
let rootController = require('./src/controllers');

const server = restify.createServer({
  name: 'rewardTracker',
  log: new Logger({
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
    serializers: restify.bunyan.serializers
  })
});
server.use(restify.queryParser());
server.use(restify.bodyParser());

const uriRoot = `/api/${process.env.API_VERSION}`;

server.get(uriRoot, rootController.get);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});