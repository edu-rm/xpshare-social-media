import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import IUserRepository from '../repositories/IUserRepository'
import User from '../entities/User'

interface IRequest {
  name: string
  email: string
  password: string
}

const execute = async (
  { name, email, password }: ICreateUserDTO,
  repository: IUserRepository
): Promise<User> => {
  const userCreated = await repository.create({
    name,
    email,
    password
  })

  const userSaved = await repository.save(userCreated)

  return userSaved
}

export default execute
