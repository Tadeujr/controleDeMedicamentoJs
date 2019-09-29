export class UnidadeSaude {
    protected nomeUnidade: string;

    constructor(nomeUnidade: string) {
        this.nomeUnidade = nomeUnidade;
    }

    public getNomeUnidade(): string {

        return this.nomeUnidade;
    }
}