const bodyParser = require("body-parser");
const morgan = require("morgan");

const api = require("../api/routes");
const { genericErrorHandler } = require("../api/middleware");

module.exports = app => {
  // for any middlewares that need to run befoure our routes

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan("combined"));

  // define ALL rooutes here
  app.use(api);

  // for any other middlewares that need to run after our routes
  app.use(genericErrorHandler);
};
