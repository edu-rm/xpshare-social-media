import { Request, Response } from 'express'
import createSessionService from '../services/CreateSessionService'
import userRepository from '../repositories/implementations/UsersRepository'
import hashProvider from '../providers/Hash'
import sessionProvider from '../providers/SessionProvider'

export const create = async (request: Request, response: Response) => {
  const { email, password } = request.body

  const { user, token } = await createSessionService(
    {
      email,
      password
    },
    userRepository,
    hashProvider,
    sessionProvider
  )

  return response.json({ user, token })
}
