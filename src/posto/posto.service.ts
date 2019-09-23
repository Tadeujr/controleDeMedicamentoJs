import { Injectable } from "@nestjs/common";
import { UsuarioE } from "src/entidades/usuarioE.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "src/dao/models/usuario.model";

@Injectable()
export class PostoService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<UsuarioE>
  ) {}

  async getall() {
    return await this.usuarioRepository.find();
  }

  async criarPessoa(novoUsuario: Usuario) {
    const nova = new Usuario();
    nova.nome = novoUsuario.nome;
    nova.login = novoUsuario.login;
    nova.email = novoUsuario.email;
    nova.senha = novoUsuario.senha;

    return await this.usuarioRepository.save(nova);
  }
}
