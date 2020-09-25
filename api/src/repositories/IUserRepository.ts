import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import User from 'entities/User'

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>
  save(user: User): Promise<User>
}
