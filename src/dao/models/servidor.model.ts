import { Usuario } from "./usuario.model";

export class Servidor extends Usuario {
  super(nome: string, login: string, senha: string, email: string) {}
}
