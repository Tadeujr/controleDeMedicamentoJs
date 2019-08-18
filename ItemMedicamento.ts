export class ItemMedicamento{
    protected quantidadeEstoque: number;
    protected lote:string;
    protected validade:string;

 
    constructor(quantidadeEstoque:number, lote:string, validade:string){
        this.lote = lote;
        this.quantidadeEstoque = quantidadeEstoque;
        this.validade = validade;
    }

    public getQuantidadeEstoque():number{
        return this.quantidadeEstoque;
    }

    public getLote():string{
        return this.lote;
    }

    public getValidade():string{
        return this.validade
    }
}