const { Router } = require("express");
const users = require("./users");

// any endpoints for api/v1/{anything} will be here
const v1 = Router();
users(v1);

module.exports = v1;
