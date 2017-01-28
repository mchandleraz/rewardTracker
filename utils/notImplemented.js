module.exports = function(req, res, next) {
  res.send(501, {
    "error": "501 Not Implemented"
  });
  next();
}