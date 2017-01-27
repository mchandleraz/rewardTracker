function RootController() {};

RootController.prototype.get = function(req, res, next) {
  res.send({
  	foo: "bar"
  });
  next();
}

module.exports = new RootController();