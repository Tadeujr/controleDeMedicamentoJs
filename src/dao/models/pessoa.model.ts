export abstract class Pessoa {
  private _nome: string = "";

  get nome(): string {
    return this._nome;
  }

  set nome(nomeP) {
    this.nome = nomeP;
  }
}
