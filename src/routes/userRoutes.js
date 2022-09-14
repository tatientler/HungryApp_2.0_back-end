import express from 'express'
import UserController from "../controllers/userController.js"
import AuthController from "../controllers/authController.js"

const router = express.Router()

router
    .get("/users/all", UserController.getAll)
    .post("/users/create", UserController.createUser)
    .post("/users/login", AuthController.login)
    .get("/users/:id", UserController.getUserById)
    .patch("/users/update/:id", UserController.updateUserById)
    .delete("/users/delete/:id", UserController.deleteUserById)

export default router
