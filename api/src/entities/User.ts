import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  DeleteDateColumn
} from 'typeorm'

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

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default User
