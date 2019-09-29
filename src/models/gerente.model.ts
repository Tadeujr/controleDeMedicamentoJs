import { Usuario } from "./usuario.model";

export class Gerente extends Usuario {
  super(nome: string, login: string, senha: string, email: string, tipoUsuario: number) { }
}
