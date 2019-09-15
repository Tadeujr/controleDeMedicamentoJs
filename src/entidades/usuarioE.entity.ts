import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
