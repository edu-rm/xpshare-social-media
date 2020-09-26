import IXpRepository from '../repositories/interfaces/IXpRepository'
import Xp from '../entities/Xp'
import AppError from '../errors/AppError'
import ICreateXpDTO from 'DTOs/ICreateXpDTO'

const execute = async (
  { title, content }: ICreateXpDTO,
  repository: IXpRepository
): Promise<Xp> => {
  const xpCreated = await repository.create({ title, content })
  const xpSaved = await repository.create(xpCreated)
  return xpSaved
}

export default execute
