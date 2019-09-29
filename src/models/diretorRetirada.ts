import { BilderRetirada } from "./bilderRetirada";
import { Medicamento } from "./medicamento.model";
import { Retirada } from "./retirada.model";

export class DiretorRetirada {
  private novaRetirada: BilderRetirada = new BilderRetirada();
  private cartaoPaciente: string;
  private nomeServidor: string;
  nMedicamento: Medicamento;

  constructor(cartaoPaciente: string, nomeServidor: string) {
    this.cartaoPaciente = cartaoPaciente;
    this.nomeServidor = nomeServidor;
  }

  nRetirada: Retirada = this.novaRetirada.retirarMedicamento(
    this.nomeServidor,
    this.cartaoPaciente
  );

  public get retirada(): Retirada {
    return this.nRetirada;
  }

  public get medicamento(): Medicamento {
    return this.nMedicamento;
  }
}
