import { Router } from 'express'
import sessionsRoutes from './session.routes'
import usersRoutes from './user.routes'
import xpsRoutes from './xp.routes'

const router = Router()

router.use('/session', sessionsRoutes)
router.use('/user', usersRoutes)
router.use('/xp', xpsRoutes)

export default router
