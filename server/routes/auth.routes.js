const express = require("express");
const { signup, signin } = require("../controller/auth.controller");
const authRouter = express.Router();

// signup and signin route
authRouter.post("/register", signup);
authRouter.post("/register", signin);

module.exports = authRouter;