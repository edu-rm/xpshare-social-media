import { Router } from 'express'
import { create } from '../controllers/UserController'

const router = Router()

router.post('/', create)

export default router
