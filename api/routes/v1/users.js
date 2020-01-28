const { Router } = require("express");
const { Container } = require("typedi");
const HttpStatus = require("http-status-codes");

const UsersService = require("../../../services/UsersService");

const route = Router();

module.exports = app => {
  const userService = Container.get(UsersService);

  app.use("/users", route);

  route.get("/", async (req, res, next) => {
    try {
      const data = await userService.getAllUsers();
      return res.json(data).status(HttpStatus.OK);
    } catch (e) {
      // this will now go to our error handler middleware
      return next(e);
    }
  });

  route.get("/:id", async (req, res, next) => {
    try {
      const data = await userService.getUser(req.params.id);
      return res.json(data).status(HttpStatus.OK);
    } catch (e) {
      // this will now go to our error handler middleware
      return next(e);
    }
  });
};
