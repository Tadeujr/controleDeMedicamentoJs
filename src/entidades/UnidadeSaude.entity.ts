import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
export class UnidadeSaudeE {
    @PrimaryGeneratedColumn()
    id_UnidadeSaude: number;

    @Column()
    nome: string;

    @Column()
    endereco: string

}