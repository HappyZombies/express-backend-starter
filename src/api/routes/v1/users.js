const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");

const UsersService = require("../../../services/UsersService");

const route = Router();

module.exports = app => {

  app.use("/users", route);

  route.get("/", async (req, res, next) => {
    try {
      const data = await UsersService.getAllUsers();
      return res.json(data).status(StatusCodes.OK);
    } catch (err) {
      return next(err);
    }
  });

  route.get("/:id", async (req, res, next) => {
    try {
      const data = await UsersService.getUser(req.params.id);
      return res.json(data).status(StatusCodes.OK);
    } catch (err) {
      return next(err);
    }
  });
};
