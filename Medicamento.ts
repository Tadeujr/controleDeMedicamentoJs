export class Medicamento {
    nome:string;
    quantidade: number;
    lote:string;
    validade: string;

    constructor(nome:string, quantidade:number, lote:string, validade: string){
        this.nome = nome
        this.quantidade = quantidade;
        this.lote = lote;
        this.validade =  validade;
    }
    
    public getName() : string {
        return this.nome;
    }

    
    public getLote() : string {
        return this.lote;
    }

    public getValidade():string{
        return this.validade;
    } 
    

    
    public getQuantidade():number{
        return this.quantidade;
    } 
    


    
}