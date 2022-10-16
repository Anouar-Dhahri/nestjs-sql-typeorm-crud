import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number

  @Column({nullable: true})
  name: string

  @Column({nullable: true})
  publisher: string

  @Column({nullable: true})
  plateform: string

  @Column({nullable: true})
  releaseyear: Number

  @CreateDateColumn({ type: "datetime"})
  createdAt: Date

  @UpdateDateColumn({ type: "datetime"})
  updatedAt: Date
}