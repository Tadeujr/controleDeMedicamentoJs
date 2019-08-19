export class Retirada {
    servidor:string;
    cartaoPaciente:string;
    
    constructor(servidor:string,cartaoPaciente:string){
        this.servidor = servidor;
        this.cartaoPaciente = cartaoPaciente;
    }

    public get getServidor():string{
        return this.servidor;
    }

    public get getCartaoPaciente():string{
        return this.cartaoPaciente;
    }    

}