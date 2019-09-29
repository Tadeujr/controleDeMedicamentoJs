import { Pessoa } from "./pessoa.model";

// cria um interface no nessa classe e depois criar outra classe para consumir os dados
export class Usuario extends Pessoa {
  private _login: string;
  private _senha: string;
  private _email: string;
  private _tipoUsuario: number;// 1(gerente)/2(atendente)/3(paciente)

  constructor(nome: string, login: string, senha: string, email: string, tipoUsuario: number) {
    super(nome);
    this._login = login;
    this._senha = senha;
    this._email = email;
    this._tipoUsuario = tipoUsuario;
  }
  get login(): string {
    return this._login;
  }

  get senha(): string {
    return this._senha;
  }

  get email(): string {
    return this._email;
  }

  get tipoUsuario(): number {
    return this._tipoUsuario;
  }
}
