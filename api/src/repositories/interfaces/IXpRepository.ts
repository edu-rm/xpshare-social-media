import ICreateXpDTO from 'DTOs/ICreateXpDTO'
import Xp from '../../entities/Xp'

export default interface IXpRepository {
  findById(id: number): Promise<Xp | undefined>
  create({ title, content, user_id }: ICreateXpDTO): Promise<Xp>
  save(xp: Xp): Promise<Xp>
}
