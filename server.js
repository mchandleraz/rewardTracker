const restify = require('restify');
const log = require('./utils/logger').call(null, restify.bunyan.serializers);
const initController = require('./utils/initController');
const rootController = require('./src/controllers').rootController;

const server = restify.createServer({
  name: 'rewardTracker',
  log
});
server.use(restify.queryParser());
server.use(restify.bodyParser());

const uriRoot = `/api/${process.env.API_VERSION}`;
initController.apply(null, [rootController, server, uriRoot]);

server.listen(8080, function() {
  console.log('party hard.');
});
