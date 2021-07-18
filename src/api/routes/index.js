const { Router } = require("express");

const apiv1 = require("./v1");

// this serves as the root path definition, define root paths here
const app = Router();
app.use("/api", apiv1);

module.exports = app;
