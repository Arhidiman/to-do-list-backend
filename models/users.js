import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {required: true, type: String, unique: true},
    password: {required: true, type: String}
})

export const UserModel =  mongoose.model('User', UserSchema)