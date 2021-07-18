const { Router } = require("express");

const route = Router();

module.exports = app => {

    app.use("/", route);

    route.get("/", async (req, res) => {
        return res.send("<h1>Welcome to Backend Starter v2.0.0!</h1>");
    });
};
