import {UserModel} from "../models/users.js"

class UsersController {
    async create(req, res) {
        try {
            const {name, password} = req.body
            const user = await UserModel.create({name, password})
            console.log(user)
            res.status(200).json(user)
        } catch(error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async getAll(req, res) {
        try {
            const allUsers = await UserModel.find()
            res.status(200).json(allUsers)
            return allUsers
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async getOne(req, res) {
        try {
            const {id} = req.params
            const user = await UserModel.findById(id)
            res.status(200).json(req.params)
            return user
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async update(req, res) {
        try {
            const user = req.body
            if (!user._id) {
                res.status(400).json(`user id is required`)
            }
            const updatedUser = await UserModel.findByIdAndUpdate(user._id, user, {new: true})
            return res.json(updatedUser)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async delete(req, res) {
        try {
            console.log(req.params)
            const {id} = req.params
            const user = await UserModel.findByIdAndDelete(id)
            res.status(200).json(`user with id ${id} deleted successfully`)
        } catch(error) {
            res.status(500).json(error)
        }
    }
}

export default new UsersController()