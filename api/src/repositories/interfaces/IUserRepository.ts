import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import User from 'entities/User'

export default interface IUserRepository {
  findById(id: number): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  create(data: ICreateUserDTO): Promise<User>
  save(user: User): Promise<User>
}
