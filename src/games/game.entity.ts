import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: Number

  @Column({nullable: true})
  name: String

  @Column({nullable: true})
  publisher: String

  @Column({nullable: true})
  plateform: String

  @Column({nullable: true})
  releaseyear: Number

  @CreateDateColumn({ type: "datetime"})
  createdAt: Date

  @UpdateDateColumn({ type: "datetime"})
  updatedAt: Date
}