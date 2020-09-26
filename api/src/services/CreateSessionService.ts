import AppError from '../errors/AppError'
import IHashProvider from '../providers/Hash/IHashProvider'
import IUserRepository from 'repositories/interfaces/IUserRepository'
import ISessionProvider from '../providers/SessionProvider/ISessionProvider'
import User from 'entities/User'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}
const execute = async (
  { email, password }: IRequest,
  repository: IUserRepository,
  hashProvider: IHashProvider,
  sessionProvider: ISessionProvider
): Promise<IResponse> => {
  const user = await repository.findByEmail(email)

  if (!user) {
    throw new AppError('Email or pass incorrect', 401)
  }

  const passMatch = await hashProvider.compareHash(password, user.password)

  if (!passMatch) {
    throw new AppError('Email or pass incorrect', 401)
  }

  const token = sessionProvider.createSession(user.id)

  return {
    user,
    token
  }
}

export default execute
