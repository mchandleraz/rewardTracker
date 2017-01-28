const notImplemented = require('../../utils/notImplemented');

function RootController() {};

RootController.prototype.get = function(req, res, next) {
  res.send(200);
  next();
}

RootController.prototype.post = function(req, res, next) {
  res.send(200, JSON.parse(req.body));
  next();
}

RootController.prototype.put = notImplemented;

RootController.prototype.del = notImplemented;

module.exports = new RootController();