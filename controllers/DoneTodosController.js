import {DoneTodoModel} from "../models/doneTodos.js";
class DoneTodosController {
    async create(req, res) {
        try {
            const {author, text} = req.body
            const post = await DoneTodoModel.create({author, text})
            res.status(200).json(post)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async getAll(req, res) {
        try {
            const allTodos = await DoneTodoModel.find()
            res.status(200).json(allTodos)
            return allTodos
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async getOne(req, res) {
        try {
            const {id} = req.params
            const todo = await DoneTodoModel.findById(id)
            res.status(200).json(req.params)
            return todo
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async update(req, res) {
        try {
            const todo = req.body
            if (!todo._id) {
                res.status(400).json(`todo id is required`)
            }
            const updatedTodo = await DoneTodoModel.findByIdAndUpdate(todo._id, todo, {new: true})
            return res.json(`todo with id ${todo._id} updated successfully`)
            // return res.json(updatedTodo)
        } catch(error) {
            res.status(500).json(error)
        }
    }
    async delete(req, res) {
        try {
            console.log(req.params)
            const {id} = req.params
            const todo = await DoneTodoModel.findByIdAndDelete(id)
            res.status(200).json(`todo with id ${id} deleted successfully`)
        } catch(error) {
            res.status(500).json(error)
        }
    }
}

export default new DoneTodosController()