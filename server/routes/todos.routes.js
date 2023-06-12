const express = require("express");
const { createTodo, editTodo, deleteTodo, getUsersTodos } = require("../controller/todos.controller");

// todos router
const todosRouter = express.Router();

// create todo route
todosRouter.post("/add", createTodo);

// update todo route
todosRouter.patch("/edit/:id", editTodo);

// delete todo route
todosRouter.delete("/delete/:id", deleteTodo);

// get user todos route
todosRouter.get("/user", getUsersTodos);


module.exports = todosRouter;