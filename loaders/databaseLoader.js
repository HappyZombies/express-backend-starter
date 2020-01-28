const knex = require("knex");
const { Model } = require("objection");

const knexConfig = require("../knexfile");
const logger = require("../services/Logger");

module.exports = async () => {
  logger.debug("Starting Database connection");
  const k = knex(knexConfig);
  try {
    await k.raw("select 1 + 1 as result");
    Model.knex(k);
  } catch (e) {
    logger.error("Database connection failed! Here's the error => " + e);
    process.exit(1);
    return;
  }
  k.on("query", query => logger.debug("DB Query Ran: " + query.sql));
  logger.debug("Database connection is good!");
};
