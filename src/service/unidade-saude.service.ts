import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UnidadeSaudeE } from "src/entidades/UnidadeSaude.entity";
import { Repository } from "typeorm";
import { UnidadeSaude } from "src/models/unidade-de-saude.model";




@Injectable()
export class UnidadeSaudeService {
    constructor(
        @InjectRepository(UnidadeSaudeE)
        private readonly unidadeRepository: Repository<UnidadeSaudeE>
    ) { }

    async listarUnidadesSaude(): Promise<UnidadeSaudeE[]> {
        return await this.unidadeRepository.find();
    }

    async criarUnidadeSaude(novoUnidade: UnidadeSaude): Promise<UnidadeSaudeE> {
        //vou setar o tipo de usuario ap criar o cadastrar Gerente ou cadastrarAtendente
        const unidade = new UnidadeSaude(novoUnidade.nomeUnidade, novoUnidade.nomeUnidade);

        return await this.unidadeRepository.save(unidade);
    }


}
