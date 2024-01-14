import Router from 'express'
import UsersController from "../controllers/UsersController.js";

const usersRouter = new Router

usersRouter.post('/users', UsersController.create)
usersRouter.get('/users', UsersController.getAll)
usersRouter.get('/users/:id', UsersController.getOne)
usersRouter.put('/users', UsersController.update)
usersRouter.delete('/users/:id', UsersController.delete)
usersRouter.post('/users/sign-in', UsersController.signIn)

export default usersRouter