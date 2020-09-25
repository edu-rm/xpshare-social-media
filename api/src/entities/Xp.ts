import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import User from './User'

@Entity('xps')
class Xp {
  @PrimaryGeneratedColumn('increment')
  id: number

  @DeleteDateColumn()
  deleted: Date

  @Column()
  user_id: number

  @ManyToOne(() => User, (xps) => Xp, {
    cascade: true
  })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  title: string

  @Column()
  content: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Xp
