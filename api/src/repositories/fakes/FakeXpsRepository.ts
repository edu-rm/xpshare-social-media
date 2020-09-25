import { EntitySchema, getRepository } from 'typeorm'
import ICreateXpDTO from 'DTOs/ICreateXpDTO'
import Xp from '../../entities/Xp'

const xps: Xp[] = []

const findById = async (id: number): Promise<Xp | undefined> => {
  const xp = xps.find((xp) => xp.id === id)
  return xp
}

const create = async ({ title, content }: ICreateXpDTO): Promise<Xp> => {
  const xp = new Xp()

  Object.assign(xp, {
    id: Math.random() * 100,
    title,
    content
  })

  xps.push(xp)
  return xp
}

const save = async (xp: Xp): Promise<Xp> => {
  const findIndex = xps.findIndex((xp) => xp.id == xp.id)

  xps[findIndex] = xp

  return xp
}

export default {
  create,
  save,
  findById
}
