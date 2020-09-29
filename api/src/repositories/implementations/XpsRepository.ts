import { EntitySchema, getRepository, Not } from 'typeorm'
import ICreateUserDTO from 'DTOs/ICreateUserDTO'
import Xp from '../../entities/Xp'
import ICreateXpDTO from 'DTOs/ICreateXpDTO'

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

export default { create, save, findById, findAllButId }
