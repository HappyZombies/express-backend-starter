const { Router } = require("express");
const users = require("./users");
const api = require("./api");

// any endpoints for api/{anything} will be here
const v1 = Router();
api(v1);
users(v1);

module.exports = v1;
