import Router from 'express'
import DoneTodosController from "../controllers/DoneTodosController.js";

const doneToDoRouter = new Router

doneToDoRouter.post('/done-todos', DoneTodosController.create)
doneToDoRouter.get('/done-todos', DoneTodosController.getAll)
doneToDoRouter.get('/done-todos/:id', DoneTodosController.getOne)
doneToDoRouter.put('/done-todos', DoneTodosController.update)
doneToDoRouter.delete('/done-todos:id', DoneTodosController.delete)
doneToDoRouter.delete('/done-todos', DoneTodosController.deleteAll)

export default doneToDoRouter