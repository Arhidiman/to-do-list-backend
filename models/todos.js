import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    author: {required: true, type: String},
    text: {required: true, type: String},
    userId: {required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

export const TodoModel =  mongoose.model('Todo', TodoSchema)