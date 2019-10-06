import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { PessoaE } from "./PessoaE.entity";
// tem que modificar essa classe e fazendo ela herdar os metodos da interface DAO que ainda não criei
@Entity()
export class UsuarioE {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  @Column()
  tipoUsuario: number;

  @ManyToOne(type => PessoaE, pessoa => pessoa.id, { eager: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: 'fk_pessoa' })
  pessoa: PessoaE;
}
