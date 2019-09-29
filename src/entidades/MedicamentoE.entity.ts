import { DatabaseType, Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class MedicamentoE {

    @PrimaryGeneratedColumn()
    id_medicamento: number;

    @Column()
    validade: DatabaseType;

    @Column()
    lote: string;

    @Column()
    quantidade: number;

    @Column()
    email: string;




}