import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import IUserRepository from '../repositories/IUserRepository'
import User from '../entities/User'
import AppError from '../errors/AppError'

interface IRequest {
  name: string
  email: string
  password: string
}

const execute = async (
  { name, email, password }: ICreateUserDTO,
  repository: IUserRepository
): Promise<User> => {
  const userExists = await repository.findByEmail(email)

  if (userExists) {
    throw new AppError('Email already used')
  }

  const userCreated = await repository.create({
    name,
    email,
    password
  })

  const userSaved = await repository.save(userCreated)

  return userSaved
}

export default execute
