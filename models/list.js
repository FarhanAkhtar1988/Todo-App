// requiring mongoose 
const mongoose = require("mongoose");

// making a task schema 
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    p: {
        type: String,
        required: true
    }
});

const Task = mongoose.model("TaskList", taskSchema);

module.exports = Task;