import { Router } from 'express'
import { create } from '../controllers/SessionController'

const router = Router()

router.post('/', create)

export default router
