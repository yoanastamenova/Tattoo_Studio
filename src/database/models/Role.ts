import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
// import { Artist } from "./Artist"

@Entity("roles")
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name'})
    name!: string

    @OneToMany(() => User, (user) => user.role)
    users!: User[]

    // @OneToMany(() => Artist, (artist) => artist.role)
    // artists!: User[]
}