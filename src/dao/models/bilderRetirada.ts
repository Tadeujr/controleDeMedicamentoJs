import { Medicamento } from "./medicamento.model";
import { Paciente } from "./paciente.model";
import { Servidor } from "./servidor.model";
import { Retirada } from "./retirada.model";

export class BilderRetirada {
  buscarMedicamento(nome: string): Medicamento {
    return null;
  }

  buscarPaciente(nome: string): Paciente {
    return null;
  }

  retirarMedicamento(serv: string, paciente: string): Retirada {
    return null;
  }

  registroRetirada(ret: Retirada, med: Medicamento, qtd: number): boolean {
    return null;
  }
}
