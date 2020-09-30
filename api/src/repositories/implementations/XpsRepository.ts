import { EntitySchema, getRepository, Not } from 'typeorm'
import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import Xp from '../../entities/Xp'
import ICreateXpDTO from 'DTOs/ICreateXpDTO'
import IUpdateXpDTO from 'DTOs/IUpdateXpDTO'

const repository = () => {
  return getRepository(Xp)
}

const findById = async (id: number): Promise<Xp | undefined> => {
  const xpsRepository = repository()
  const xp = await xpsRepository.findOne(id)

  return xp
}

const create = async ({
  title,
  content,
  user_id
}: ICreateXpDTO): Promise<Xp> => {
  const xpsRepository = repository()
  const xp = await xpsRepository.create({
    title,
    content,
    user_id
  })

  return xp
}

const update = async (data: IUpdateXpDTO): Promise<Xp> => {
  const xpsRepository = repository()
  const xp = await xpsRepository.findOne(data.id)

  const xpUpdated = await xpsRepository.save({
    ...xp,
    ...data
  })

  return xpUpdated
}

const save = async (xp: Xp): Promise<Xp> => {
  const xpsRepository = repository()

  const xpSaved = await xpsRepository.save(xp)
  return xpSaved
}

const findAllButId = async (user_id: number): Promise<Xp[] | undefined> => {
  const xpsRepository = repository()

  const xps = await xpsRepository.find({
    where: {
      user_id: Not(user_id)
    }
  })

  return xps
}

const findAllById = async (user_id: number): Promise<Xp[] | undefined> => {
  const xpsRepository = repository()

  const xps = await xpsRepository.find({
    where: {
      user_id
    }
  })

  return xps
}

export default { create, save, findById, findAllButId, findAllById, update }
