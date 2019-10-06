import {
    Controller,
    Post,
    Body,
    Get,
    Res,
    HttpStatus,
} from "@nestjs/common";
import { UnidadeSaudeService } from "src/service/unidade-saude.service";



@Controller('unidadesaude')
export class UnidadeSaudeController {
    constructor(private readonly unidadeService: UnidadeSaudeService) { }

    @Post()
    criarUnidadeSaude(@Body() UnidadeSaude, @Res() resposta) {
        this.unidadeService
            .criarUnidadeSaude(UnidadeSaude)
            .then(mensagem => {
                resposta.status(HttpStatus.CREATED).json(mensagem);
            })
            .catch(() => {
                resposta
                    .status(HttpStatus.FORBIDDEN)
                    .json({ mensagem: "Erro ao criar unidade de saude" });
            });
    }


    @Get()
    buscarUnidade(@Res() resposta) {
        this.unidadeService
            .listarUnidadesSaude()
            .then(mensagem => {
                resposta.status(HttpStatus.OK).json(mensagem);
            })
            .catch(() => {
                resposta
                    .status(HttpStatus.FORBIDDEN)
                    .json({ mensagem: "Erro ao buscar Unidade de saude" });
            });
    }

}

