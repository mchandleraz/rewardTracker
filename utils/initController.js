module.exports = function initController(controller, server, uriRoot) {
  const methods = ['get', 'post', 'del', 'put'];

  for (var method of methods) {
    server[method](uriRoot, controller[method]);
  }
}