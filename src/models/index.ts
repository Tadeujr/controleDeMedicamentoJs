import { Gerente } from "./gerente.model";
import { ItemMedicamento } from "./item-medicamento.model";
import { Medicamento } from "./medicamento.model";
import { Paciente } from "./paciente.model";
import { Usuario } from "./usuario.model";
import { RegistroDeRetirada } from "./registor-de-retirada.model";
import { Retirada } from "./retirada.model";
import { Servidor } from "./servidor.model";
import { UnidadeSaude } from "./unidade-de-saude.model";

// fazer com as outras

export const models = {
  gerente: Gerente,
  itemMedicamento: ItemMedicamento,
  medicamento: Medicamento,
  paciente: Paciente,
  usuario: Usuario,
  registrodeReirada: RegistroDeRetirada,
  retirada: Retirada,
  servidor: Servidor,
  unidadeDeSaude: UnidadeSaude
};
