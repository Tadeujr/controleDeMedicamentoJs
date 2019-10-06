import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PessoaE } from "src/entidades/PessoaE.entity";
import { Repository } from "typeorm";
import { Pessoa } from "src/models/pessoa.model";


@Injectable()
export class PessoaService {

    constructor(
        @InjectRepository(PessoaE)
        private readonly pessoaRepository: Repository<PessoaE>
    ) { }

    async listarPessoa(): Promise<PessoaE[]> {
        return await this.pessoaRepository.find();
    }

    async criarPessoa(novaPessoa: Pessoa): Promise<PessoaE> {
        //vou setar o tipo de usuario ap criar o cadastrar Gerente ou cadastrarAtendente
        const nova = new Pessoa(
            novaPessoa.nome,
            novaPessoa.tipoPessoa,
            novaPessoa.cartaoSus

        );

        return await this.pessoaRepository.save(nova);
    }

}
