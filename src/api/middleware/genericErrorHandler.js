const { StatusCodes } = require("http-status-codes");

const logger = require("../../services/internal/Logger");

module.exports = (err, req, res, next) => {
  logger.error("An ApiError is going to be returned => " + err);
  res.status(err.httpStatusCode || StatusCodes.INTERNAL_SERVER_ERROR);
  return res.json(err);
};
