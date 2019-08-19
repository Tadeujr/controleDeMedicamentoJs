import {Servidor} from "./Servidor"
import {Gerente} from "./Gerente"

export class CriaEntidade{
    //Pesquisar try cath do type script
    
    public fabricaEntidades(tipoEntidade:string):any{
        let modelo;

        if (tipoEntidade == "servidor"){
            modelo = new Servidor();    
        }if(tipoEntidade == "gerente"){
            modelo = new Gerente();
        }

        return  modelo;
    }
}