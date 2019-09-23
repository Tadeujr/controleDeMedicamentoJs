import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
// tem que modificr essa classe e fazendo ela herdar os metodos da interface DAO que ainda não criei
@Entity()
export class UsuarioE {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  email: string;
}
