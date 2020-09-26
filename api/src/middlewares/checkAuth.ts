import { Request, Response, NextFunction, response } from 'express'
import * as jwt from 'jsonwebtoken'
import auth from '../config/auth'
import AppError from '../errors/AppError'

export const checkAuth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = <string>request.headers['auth']

  jwt.verify(token, auth.secret, (err, dec) => {
    if (err) throw new AppError('Token Invalid')

    response.locals.jwtPayload = <object>dec

    const { id } = response.locals.jwtPayload

    const newToken = jwt.sign({ id }, auth.secret, {
      expiresIn: auth.expiresIn
    })

    response.setHeader('token', newToken)

    next()
  })
}
