import { DatabaseType, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { MedicamentoE } from "./MedicamentoE.entity";
import { PessoaE } from "./PessoaE.entity";
import { UsuarioE } from "./UsuarioE.entity";



@Entity()
export class RetiradaE {

    @PrimaryGeneratedColumn()
    id_retirada: number;

    @Column()
    data: DatabaseType;

    @Column()
    tipoUsuario: number;


    @ManyToOne(type => MedicamentoE, medicamento => medicamento.id_medicamento, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: 'fk_medicamento' })
    medicamento: MedicamentoE;

    @ManyToOne(type => PessoaE, pessoa => pessoa.id, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: 'fk_pessoa' })
    pessoa: PessoaE;

    @ManyToOne(type => UsuarioE, usuario => usuario.id, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: 'fk_usuario' })
    usuario: UsuarioE;


}