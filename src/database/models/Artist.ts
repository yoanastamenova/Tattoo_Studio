// import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
// import { Role } from "./Role"
// import { User } from "./User"

// @Entity("artists")
// export class Artist extends BaseEntity {
//     @PrimaryGeneratedColumn()
//     id!: number

//     @Column({ name: 'email' })
//     email!: string

//     @Column({ name: 'password_hash' })
//     password_hash!: string

//     @Column({ name: 'role_id' })
//     role_id!: number

//     @Column({ name: "created_at" })
//     created_at!: Date

//     @Column({ name: "updated_at" })
//     updated_at!: Date

//     @Column({ name: 'specialization' })
//     specialization!: string

//     @Column({ name: 'bio' })
//     bio!: string

//     @Column({ name: 'style' })
//     style!: string

//     @ManyToOne(() => Role, (role) => role.artists)
//     @JoinColumn({ name: "role_id" })
//     role!: Role;

//     // @ManyToOne(() => User, user => user.artistsEmail)
//     // @JoinColumn({ name: "email" })
//     // userEmail!: User;
// }
