import Router from 'express'
import TodosController from "../controllers/TodosController.js";

const router = new Router

router.post('/todos', TodosController.create)
router.get('/todos', TodosController.getAll)
router.get('/todos/:id', TodosController.getOne)
router.put('/todos', TodosController.update)
router.delete('/todos/:id', TodosController.delete)

export default router