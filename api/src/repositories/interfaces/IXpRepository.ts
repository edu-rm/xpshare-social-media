import ICreateXpDTO from 'DTOs/ICreateXpDTO'
import IUpdateXpDTO from 'DTOs/IUpdateXpDTO'

import Xp from '../../entities/Xp'

export default interface IXpRepository {
  findById(id: number): Promise<Xp | undefined>
  create({ title, content, user_id }: ICreateXpDTO): Promise<Xp>
  update(data: IUpdateXpDTO): Promise<Xp>
  save(xp: Xp): Promise<Xp>
  findAllButId(user_id: number): Promise<Xp[] | undefined>
  findAllById(user_id: number): Promise<Xp[] | undefined>
  softDelete(id: number): Promise<boolean>
}
