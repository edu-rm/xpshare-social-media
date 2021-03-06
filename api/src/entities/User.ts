import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  DeleteDateColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'
import Xp from './Xp'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @DeleteDateColumn()
  deleted: Date

  @Column({
    unique: true
  })
  email: string

  @Column()
  password: string

  @OneToMany(() => Xp, (user) => User, {
    cascade: true
  })
  xps: Xp[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default User
