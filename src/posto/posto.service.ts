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

  async getall(): Promise<UsuarioE[]> {
    return await this.usuarioRepository.find();
  }

  async criarUsuario(novoUsuario: Usuario): Promise<UsuarioE> {
    const nova = new Usuario();
    nova.nome = novoUsuario.nome;
    nova.login = novoUsuario.login;
    nova.email = novoUsuario.email;
    nova.senha = novoUsuario.senha;

    return await this.usuarioRepository.save(nova);
  }

  async deleteMensagem(idUsuario: number): Promise<any> {
    return await this.usuarioRepository.delete(idUsuario);
  }
}
