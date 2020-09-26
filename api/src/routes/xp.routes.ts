import { Router } from 'express'
import { create } from '../controllers/XpController'
import { checkAuth } from '../middlewares/checkAuth'

const router = Router()

router.post('/', [checkAuth], create)

export default router
