import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param
} from "@nestjs/common";


import { Usuario } from "src/models/usuario.model";
import { UsuarioService } from "src/service/Usuario.service";


// Lembrar de Mudar o nome no controller senao da zica
@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }
  //Crud Usuario
  @Post()
  criarUsuario(@Body() Usuario, @Res() resposta) {
    this.usuarioService
      .criarUsuario(Usuario)
      .then(mensagem => {
        resposta.status(HttpStatus.CREATED).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao criar usuario" });
      });
  }

  @Get()
  buscarUsuario(@Res() resposta) {
    this.usuarioService
      .listarUsuarios()
      .then(mensagem => {
        resposta.status(HttpStatus.OK).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao buscar usuarios" });
      });
  }

  @Put("id")
  atualizarUsuario(
    @Body() usuario: Usuario,
    @Res() resposta,
    @Param("id") idUser,
    campo: string,
    info: string
  ) {
    this.usuarioService
      .atualizarUsuario(idUser, campo, info)
      .then(mensagem => {
        resposta.status(HttpStatus.OK).json(mensagem);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao atualizar usuarios" });
      });
  }

  @Delete(":id")
  deletarUsuario(@Res() resposta, @Param("id") idUsuario) {
    this.usuarioService
      .deleteUsuario(idUsuario)
      .then(res => {
        resposta.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        resposta
          .status(HttpStatus.FORBIDDEN)
          .json({ mensagem: "Erro ao deletar usuarios" });
      });
  }
}
