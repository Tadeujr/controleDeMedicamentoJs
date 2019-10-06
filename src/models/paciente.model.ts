import { Pessoa } from "./pessoa.model";

export class Paciente extends Pessoa {
  private _cartaSus: string = "";

  public get cartaSus(): string {
    return this._cartaSus;
  }
  public set cartaSus(value: string) {
    this._cartaSus = value;
  }
}
