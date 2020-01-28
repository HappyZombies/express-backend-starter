if (process.env.NODE_ENV === "dev") require("dotenv").config();
const express = require("express");

const loaders = require("./loaders");
const logger = require("./services/Logger");

startServer = async () => {
  logger.debug("startServer() was called, starting server");
  const app = express();
  await loaders(app);
  app.listen(process.env.PORT, err => {
    if (err) {
      logger.error(err);
      process.exit(1);
      return;
    }
    logger.info(`
      #########################################################
      👍  Server listening on port: ${process.env.PORT} 👍
      #########################################################
    `);
  });
};

startServer();
