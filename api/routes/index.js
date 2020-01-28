const { Router } = require("express");

const apiV1 = require("./v1");

// this serves as the root path definition
const app = Router();
app.use("/api/v1", apiV1);

module.exports = app;
