const mongoose = require("mongoose");

// Defining a Mongoose schema for the "todo" collection
const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    status: { type: Boolean, default: false },
    description: String, // optional
    user: String // optional
}, {
    versionKey: false
});

// Creating a Mongoose model for the "todo" collection using the defined schema
const TodoModel = mongoose.model("todo", todoSchema);

// Exporting the TodoModel to be used by other parts of the application
module.exports = TodoModel;