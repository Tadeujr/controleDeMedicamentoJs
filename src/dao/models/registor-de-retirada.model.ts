export class RegistroDeRetirada{
    protected quantidadeRetirada:number;
    protected data:string;
    protected hora:string;
   
    constructor(quantidadeRetirada:number, data:string, hora:string){
        this.quantidadeRetirada = quantidadeRetirada;
        this.data = data;
        this.hora = hora;
    }
    
    public getQuantidadeRetirada():number{
        return this.quantidadeRetirada;
    }

    public getData():string{
        return this.data;
    }

    public get getHora():string{
        return this.getHora;
    }

}

