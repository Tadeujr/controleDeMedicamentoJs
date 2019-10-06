import e = require("express");

export class UnidadeSaude {
    protected _nomeUnidade: string;
    protected _endereco: string;

    constructor(nomeUnidade: string, endereco: string) {
        this._nomeUnidade = nomeUnidade;
        this._endereco = endereco;
    }

    get endereco(): string {
        return this._endereco;
    }

    get nomeUnidade(): string {

        return this._nomeUnidade;
    }
}