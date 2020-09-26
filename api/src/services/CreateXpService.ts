import IXpRepository from '../repositories/interfaces/IXpRepository'
import Xp from '../entities/Xp'
import AppError from '../errors/AppError'
import ICreateXpDTO from 'DTOs/ICreateXpDTO'

const execute = async (
  { title, content, user_id }: ICreateXpDTO,
  repository: IXpRepository
): Promise<Xp> => {
  const xpCreated = await repository.create({ title, content, user_id })
  const xpSaved = await repository.save(xpCreated)
  return xpSaved
}

export default execute
