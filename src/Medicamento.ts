export class Medicamento { // importa a classe padronizada
    protected nomeMedicamento:string;
    protected principioAtivo:string;

    constructor(nomeMedicamento:string, principioAtivo:string){
        this.nomeMedicamento = nomeMedicamento;
        this.principioAtivo = principioAtivo;

    }
    
    
    
    public getnomeMedicamento() : string {
        return this.nomeMedicamento;
    }
    
    public getPrincipioAtivo ():string{
        return this.principioAtivo;
    } 
    


    
}