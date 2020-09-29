import { Router } from 'express'
import { create, index } from '../controllers/XpController'
import { checkAuth } from '../middlewares/checkAuth'

const router = Router()

router.post('/', [checkAuth], create)
router.get('/', [checkAuth], index)

export default router
