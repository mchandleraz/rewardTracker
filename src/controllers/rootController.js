const notImplemented = require('../../utils/notImplemented');

function RootController() {};

RootController.prototype.get = function(req, res, next) {
  res.send('Howdy.');
  next();
}

RootController.prototype.post = notImplemented;
RootController.prototype.put  = notImplemented;
RootController.prototype.del  = notImplemented;

module.exports = new RootController();