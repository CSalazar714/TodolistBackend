const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    textContent: {type: String, required: true},
    created_at: {type: Date, required: true},
    completed: {type: Boolean, default: false, required: true}
})

const todoModel = mongoose.model('todos', todoSchema)

module.exports = todoModel