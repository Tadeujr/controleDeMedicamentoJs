import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PessoaE {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()// (0) paciente (1) Funcionario
    tipoPessoa: number;

    @Column()
    cartaoSus: string;


}