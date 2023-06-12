const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    user: String
}, {
    versionKey: false
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = TodoModel;