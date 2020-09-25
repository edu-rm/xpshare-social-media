import { Request, Response, Router } from 'express'
import { create } from '../controllers/UserController'

const router = Router()

router.use('/user', create)

export default router
