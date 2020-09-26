import * as jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

const createSession = (id: number): string => {
  const token = jwt.sign({ id }, authConfig.secret, {
    expiresIn: authConfig.expiresIn
  })

  return token
}

export default {
  createSession
}
