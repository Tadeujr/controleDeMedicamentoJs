import {Pessoa} from "./Pessoa"

export class Paciente extends Pessoa{
    private _cartaSus: string = "";
    
    public get cartaSus(): string {
        return this._cartaSus;
    }
    public set cartaSus(value: string) {
        this._cartaSus = value;
    }
    

}