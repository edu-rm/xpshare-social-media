import { Request, Response } from 'express'
import createUserService from '../services/CreateUserService'
import userRepository from '../repositories/implementations/UsersRepository'

export const create = async (request: Request, response: Response) => {
  const { name, email, password } = request.body

  const userCreated = await createUserService(
    {
      name,
      email,
      password
    },
    userRepository
  )

  return response.json({ ...userCreated })
}
