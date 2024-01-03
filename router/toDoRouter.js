import Router from 'express'
import TodosController from "../controllers/TodosController.js";

const toDoRouter = new Router

toDoRouter.post('/todos', TodosController.create)
toDoRouter.get('/todos', TodosController.getAll)
toDoRouter.get('/todos/:id', TodosController.getOne)
toDoRouter.put('/todos', TodosController.update)
toDoRouter.delete('/todos/:id', TodosController.delete)

export default toDoRouter