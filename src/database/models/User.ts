import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Appointment } from "./Appointment"

@Entity("users")
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'first_name'})
    first_name!: string

    @Column({name: 'last_name'})
    last_name!: string

    @Column({name: 'email'})
    email!: string

    @Column({name: 'password_hash'})
    password_hash!: string

    @Column({name: 'role_id'})
    role_id!: number

    @Column({name: "created_at"})
    created_at!: Date

    @Column({name: "updated_at"})
    updated_at!: Date

    @ManyToOne (() => Role, (role) => role.users)
    @JoinColumn ({ name: "roles_id"})
    role!: Role;
    
    @OneToMany (() => Appointment, (appointment) => appointment.user)
    appointments!: User[];
}
