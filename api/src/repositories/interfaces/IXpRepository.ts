import ICreateXpDTO from 'DTOs/ICreateXpDTO'
import Xp from '../../entities/Xp'

export interface IXpRepository {
  findById(id: number): Promise<Xp | undefined>
  create({ title, content }: ICreateXpDTO): Promise<Xp>
  save(xp: Xp): Promise<Xp>
}
