import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { PessoaE } from './PessoaE.entity';


@Entity()
export class PacienteE {
    @PrimaryGeneratedColumn()
    idP: number;

    @Column()
    cartaoSus: string;
    // pesquisar  como utilizar o typeORM
    // @Column() fk_idP: number; @ManyToMany(type => PessoaE, paciente => paciente.id)

}