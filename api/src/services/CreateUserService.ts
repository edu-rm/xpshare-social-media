import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import IUserRepository from '../repositories/interfaces/IUserRepository'
import User from '../entities/User'
import AppError from '../errors/AppError'
import IHashProvider from 'providers/Hash/IHashProvider'

const execute = async (
  { name, email, password }: ICreateUserDTO,
  repository: IUserRepository,
  hashProvider: IHashProvider
): Promise<User> => {
  const userExists = await repository.findByEmail(email)

  if (userExists) {
    throw new AppError('Email already used')
  }

  const userCreated = await repository.create({
    name,
    email,
    password: await hashProvider.generateHash(password)
  })

  const userSaved = await repository.save(userCreated)

  return userSaved
}

export default execute
