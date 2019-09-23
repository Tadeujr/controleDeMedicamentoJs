import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PacienteE {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cartaoSus: string;




}