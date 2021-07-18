const express = require("express");

const loaders = require("./loaders");
const logger = require("./services/internal/Logger");

const startServer = async () => {
  logger.debug("startServer() was called, starting server");
  const app = express();
  await loaders(app);
  app.listen(process.env.PORT, err => {
    if (err) {
      logger.error(err);
      return process.exit(1);
    }
    logger.info(`
      #########################################################
        Server listening on port: ${process.env.PORT} 
      #########################################################
    `);
  });
};

startServer();
