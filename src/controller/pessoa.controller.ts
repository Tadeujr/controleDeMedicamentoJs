import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { PessoaService } from 'src/service/pessoa.service';

@Controller('pessoa')
export class PessoaController {

    constructor(private readonly pessoaService: PessoaService) { }

    @Post()
    criarPessoa(@Body() Pessoa, @Res() resposta) {
        this.pessoaService
            .criarPessoa(Pessoa)
            .then(mensagem => {
                resposta.status(HttpStatus.CREATED).json(mensagem);
            })
            .catch(() => {
                resposta
                    .status(HttpStatus.FORBIDDEN)
                    .json({ mensagem: "Erro ao criar pessoa" });
            });
    }

}
