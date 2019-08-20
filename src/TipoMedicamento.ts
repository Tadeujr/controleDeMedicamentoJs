import {Medicamento} from "./Medicamento"

class TipoMedicamento {
    medicamento: Medicamento;
    qtdRetirada: number;

    constructor(medicamento:Medicamento, qtdRetirada:number){
        this.medicamento = medicamento;
        this.qtdRetirada = qtdRetirada;
    }
    
}