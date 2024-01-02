import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    author: {required: true, type: String},
    text: {required: true, type: String}
})

export const TodoModel =  mongoose.model('Todo', TodoSchema)