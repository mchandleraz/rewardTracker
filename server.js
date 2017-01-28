const restify = require('restify');
const log = require('./utils/logger').call(null, restify.bunyan.serializers);
let rootController = require('./src/controllers');

const server = restify.createServer({
  name: 'rewardTracker',
  log
});
server.use(restify.queryParser());
server.use(restify.bodyParser());

const uriRoot = `/api/${process.env.API_VERSION}`;
initController(rootController);

function initController(controller) {
  const methods = ['get', 'post', 'del', 'put'];

  for (var method of methods) {
    server[method](uriRoot, controller[method]);
  }
}

server.listen(8080, function() {
  console.log('party hard.');
});
