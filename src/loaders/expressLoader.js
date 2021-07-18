const express = require("express");

const api = require("../api/routes");
const { genericErrorHandler } = require("../api/middleware");

module.exports = app => {
  // define any middlewares that need to run befoure our routes

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // define ALL routes here
  app.use(api);

  // for any other middlewares that need to run after our routes
  app.use(genericErrorHandler);
};
