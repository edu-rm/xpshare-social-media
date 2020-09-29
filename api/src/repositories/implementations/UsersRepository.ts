import { EntitySchema, getRepository } from 'typeorm'
import ICreateUserDTO from '../../DTOs/ICreateUserDTO'
import User from '../../entities/User'

const repository = () => {
  return getRepository(User)
}

const findById = async (id: number): Promise<User | undefined> => {
  const usersRepository = repository()
  const user = await usersRepository.findOne(id)

  return user
}

const findByEmail = async (email: string): Promise<User | undefined> => {
  const usersRepository = repository()
  const user = await usersRepository.findOne({
    where: {
      email
    }
  })

  return user
}

const create = async ({
  name,
  email,
  password
}: ICreateUserDTO): Promise<User> => {
  const usersRepository = repository()
  const user = await usersRepository.create({
    name,
    email,
    password
  })

  return user
}

const save = async (user: User): Promise<User> => {
  const usersRepository = repository()

  const userSaved = await usersRepository.save(user)
  return userSaved
}

export default { create, save, findByEmail, findById }
