import { Router } from 'express'
import { create, index, update, remove } from '../controllers/XpController'
import { index as indexUserXp } from '../controllers/UserXpController'

import { checkAuth } from '../middlewares/checkAuth'

const router = Router()

router.post('/', [checkAuth], create)
router.get('/', [checkAuth], index)
router.put('/', [checkAuth], update)
router.delete('/:id', [checkAuth], remove)

router.get('/myxps', [checkAuth], indexUserXp)

export default router
