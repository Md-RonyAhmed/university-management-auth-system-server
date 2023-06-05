import { Router } from 'express'
import userController from './user.controller'

const router = Router()

router.post('/create-user', userController.createUser)

export default router
