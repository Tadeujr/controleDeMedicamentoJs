export class Pessoa {
  private _nome: string;
  private _tipoPessoa: number;
  private _cartaoSus: string;

  constructor(nome: string, tipo: number, cartaoSus: string) {
    this._nome = nome;
    this._cartaoSus = cartaoSus;
    this._tipoPessoa = tipo;
  }

  get nome(): string {
    return this._nome;
  }

  get tipoPessoa(): number {
    return this._tipoPessoa
  }
  get cartaoSus(): string {
    return this._cartaoSus;
  }

}
