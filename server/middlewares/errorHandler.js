function errorHandler(error, req, res, next) {
  const { value = 500 } = error;
  return res.status(value).send(error.toString());
}

module.exports = errorHandler;
