import { Injectable, Post } from "@nestjs/common";
import { UsuarioE } from "src/entidades/usuarioE.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "src/dao/models/usuario.model";

@Injectable()
export class PostoService {
  constructor(
    @InjectRepository(UsuarioE)
    private readonly usuarioRepository: Repository<UsuarioE>
  ) {}

  async listarUsuarios(): Promise<UsuarioE[]> {
    return await this.usuarioRepository.find();
  }

  async criarUsuario(novoUsuario: Usuario): Promise<UsuarioE> {
    const nova = new Usuario(
      novoUsuario.nome,
      novoUsuario.login,
      novoUsuario.email,
      novoUsuario.senha
    );

    return await this.usuarioRepository.save(nova);
  }

  //tem que receber o parametro a se mudado
  //Usuario nao vai poder mudar o o nome do login
  async atualizarUsuario(
    idUser: number,
    campo: string,
    info: string
  ): Promise<UsuarioE> {
    const userApdate = await this.usuarioRepository.findOne(idUser);
    if (campo === "nome") {
      userApdate.nome = info;
    } else if (campo === "email") {
      userApdate.email = info;
    } else if (campo === "senha") {
      userApdate.senha = info;
    }

    return await this.usuarioRepository.save(userApdate);
  }

  async deleteUsuario(idUsuario: number): Promise<any> {
    return await this.usuarioRepository.delete(idUsuario);
  }
}
