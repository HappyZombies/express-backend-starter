const HttpStatus = require("http-status-codes");

const logger = require("../../services/Logger");

module.exports = (err, req, res, next) => {
  logger.error("An ApiError is going to be returned => " + err);
  res.status(err.httpStatusCode || HttpStatus.INTERNAL_SERVER_ERROR);
  res.json(err);
};
