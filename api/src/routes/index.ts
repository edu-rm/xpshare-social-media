import { Router } from 'express'
import sessionsRoutes from './session.routes'
import usersRoutes from './user.routes'
import xpsRotues from './xp.routes'

const router = Router()

router.use('/session', sessionsRoutes)
router.use('/user', usersRoutes)
router.use('/xp', xpsRotues)

export default router
