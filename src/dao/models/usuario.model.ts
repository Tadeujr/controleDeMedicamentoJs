import { Pessoa } from "./pessoa.model";

// cria um interface no nessa classe e depois criar outra classe para consumir os dados
export class Usuario extends Pessoa {
  private _login: string = "";
  private _senha: string = "";
  private _email: string = "";

  get login(): string {
    return this._login;
  }
  set login(loginUser: string) {
    this._login = loginUser;
  }

  get senha(): string {
    return this._senha;
  }
  set senha(senhaUser: string) {
    this._senha = senhaUser;
  }

  get email(): string {
    return this._email;
  }
  set email(emailUser: string) {
    this._login = emailUser;
  }
}
