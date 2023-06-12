const express = require("express");
const { signup, signin } = require("../controller/auth.controller");
const authRouter = express.Router();

// signup and signin route
authRouter.post("/signup", signup);
authRouter.post("/signin", signin);

module.exports = authRouter;