import { EntitySchema, getRepository } from 'typeorm'
import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import User from '../../entities/User'

const users: User[] = []

const findById = async (id: number): Promise<User | undefined> => {
  const user = users.find((user) => user.id === id)
  return user
}

const findByEmail = async (email: string): Promise<User | undefined> => {
  const user = users.find((user) => user.email === email)
  return user
}

const create = async ({
  name,
  email,
  password
}: ICreateUserDTO): Promise<User> => {
  const user = new User()

  Object.assign(user, {
    id: Math.random() * 100,
    name,
    email,
    password
  })

  users.push(user)
  return user
}

const save = async (user: User): Promise<User> => {
  const findIndex = users.findIndex((findUser) => (findUser.id = user.id))

  users[findIndex] = user

  return user
}

export default {
  create,
  save,
  findById,
  findByEmail
}
