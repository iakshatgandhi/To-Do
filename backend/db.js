const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://akshatgandhi224663:VCGeb21GcCzjsP1C@cluster0.d9zawrw.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}