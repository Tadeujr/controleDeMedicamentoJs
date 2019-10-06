import { PrimaryGeneratedColumn, ManyToOne, JoinColumn, Entity } from "typeorm";
import { UnidadeSaudeE } from "./UnidadeSaude.entity";


@Entity()
export class ItemMedicamentoE {
    @PrimaryGeneratedColumn()
    id_itemMedicamento: number;

    @ManyToOne(type => UnidadeSaudeE, unidade => unidade.id_UnidadeSaude, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: 'fk_unidadeSaude' })
    unidade: UnidadeSaudeE;


}