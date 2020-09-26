import { Request, Response, Router } from 'express'
import sessionsRoutes from './session.routes'
import usersRoutes from './user.routes'

const router = Router()

router.use('/session', sessionsRoutes)
router.use('/user', usersRoutes)

export default router
