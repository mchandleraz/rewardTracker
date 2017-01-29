import restify from 'restify';
import Log from './utils/logger';
import initController from './utils/initController';
import { rootController } from './src/controllers';

const server = restify.createServer({
  name: 'rewardTracker',
  log: Log(restify.bunyan.serializers)
});
server.use(restify.queryParser());
server.use(restify.bodyParser());

const uriRoot = `/api/${process.env.API_VERSION}`;
initController.apply(null, [rootController, server, uriRoot]);

server.listen(8080, function() {
  console.log('party hard.');
});
