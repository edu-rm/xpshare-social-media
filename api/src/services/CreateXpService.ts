import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import IUserRepository from '../repositories/interfaces/IUserRepository'
import Xp from '../entities/Xp'
import AppError from '../errors/AppError'

interface IRequest {
  name: string
  email: string
  password: string
}

const execute = async (
  { name, email, password }: ICreateUserDTO,
  repository: IUserRepository
): Promise<void> => {}

export default execute
