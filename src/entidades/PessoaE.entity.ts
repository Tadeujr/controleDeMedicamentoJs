import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PessoaE {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

}