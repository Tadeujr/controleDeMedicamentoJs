import {Medicamento} from "./Medicamento"

let newUser = new Medicamento("Doril","Dipirona Sódica");

console.log(newUser.getPrincipioAtivo() +"\n" + newUser.getnomeMedicamento());
console.log("Passou?")