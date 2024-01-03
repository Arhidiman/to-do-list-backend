import mongoose from "mongoose"

const DoneTodoSchema = new mongoose.Schema({
    author: {required: true, type: String},
    text: {required: true, type: String}
})

export const DoneTodoModel =  mongoose.model('DoneTodo', DoneTodoSchema)