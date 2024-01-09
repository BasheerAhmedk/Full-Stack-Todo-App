const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://basheer1801:beqrP5YwfMsztqv3@cloudmongodb.tqlvm2k.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}
