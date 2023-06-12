const TodoModel = require("../models/todo.model");

// create todo
exports.createTodo = async (req, res) => {
    const payload = req.body;
    try {
        let newTodo = new TodoModel(payload); // Create a new todo instance
        await newTodo.save(); // Save the new todo to the database
        res.status(200).json({ message: "Todo added successfully", newTodo });
    } catch (e) {
        console.log(e);
        res.send({ error: e.message });
    }
}


// get user todos
exports.getUsersTodos = async (req, res) => {
    const { userId } = req.body;
    try {
        const todos = await TodoModel.find({ userId }); // Retrieve todos for the given userId
        res.status(200).json(todos);
    } catch (e) {
        console.log(e);
        res.send({ error: e.message });
    }
}

// update todo
exports.editTodo = async (req, res) => {
    const todoId = req.params.id;
    try {
        await TodoModel.findByIdAndUpdate(todoId, req.body); // Update the todo identified by the todoId
        res.send({ message: "Todo updated successfully" });
    } catch (e) {
        console.log(e);
        res.send({ error: e.message });
    }
}

// delete todo
exports.deleteTodo = async (req, res) => {
    const todoId = req.params.id;
    try {
        const deletedTodo = await TodoModel.findByIdAndDelete(todoId); // Delete the todo identified by the todoId
        res.send({ message: "Todo deleted successfully", deletedTodo });
    } catch (e) {
        console.log(e);
        res.send({ error: e.message });
    }
}
