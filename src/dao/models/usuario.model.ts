import {Pessoa} from "./Pessoa"

// cria um interface no nessa classe e depois criar outra classe para consumir os dados
export  class Usuario extends Pessoa{
    private _login: string = "";
    private _senha: string = "";
    private _email: string = "";

    constructor(nome:string,login:string, senha:string,email:string){
        super(nome);
        this._login = login;
        this._senha = senha;
        this._email = email;
    }
    public get login(): string {
        return this._login;
    }

    public get email(): string {
        return this._email;
    }
 
    public get senha(): string {
        return this._senha;
    }





    

}