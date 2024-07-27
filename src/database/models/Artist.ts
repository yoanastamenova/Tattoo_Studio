import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Appointment } from "./Appointment";

@Entity("artists")
export class Artist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: 'first_name' })
    first_name!: string;

    @Column({ name: "last_name" })
    last_name!: string;

    @CreateDateColumn({ name: "created_at" })
    created_at!: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updated_at!: Date;

    @Column({ name: 'specialization' })
    specialization!: string;

    @Column({ name: 'bio', type: "text" })
    bio!: string;

    @Column({ name: 'style' })
    style!: string;
    
    @OneToMany(() => Appointment, appointment => appointment.artist)
    appointments!: Appointment[];
}