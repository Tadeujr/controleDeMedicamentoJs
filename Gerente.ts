import {Usuario} from "./Usuario"

class Gerente extends Usuario{
    
    super(email:string, login:string, senha:string, nome :string){
        this.email = email;
        this.login = login;
        this.senha = senha;
        this.nome = nome;
            
    }
    
}