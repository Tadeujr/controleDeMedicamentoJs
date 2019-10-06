import { Module } from "@nestjs/common";
import { GerenteService } from "src/service/gerente.service";
import { ItemMedicamentoService } from "src/service/item-medicamento.service";
import { MedicamentoService } from "src/service/medicamento.service";
import { PacienteService } from "src/service/paciente.service";
import { RegistroRetiradaService } from "src/service/registro-retirada.service";
import { RetiradaService } from "src/service/retirada.service";
import { ServidorService } from "src/service/servidor.service";
import { UnidadeSaudeService } from "src/service/unidade-saude.service";
import { UsuarioService } from "src/service/Usuario.service";
import { ItemMedicamentoController } from "src/controller/item-medicamento.controller";
import { MedicamentoController } from "src/controller/medicamento.controller";
import { PessoaController } from "src/controller/pessoa.controller";
import { RetiradaController } from "src/controller/retirada.controller";
import { UnidadeSaudeController } from "src/controller/unidade-saude.controller";
import { UsuarioController } from "src/controller/Usuario.controller";



const modelService = [GerenteService, ItemMedicamentoService, MedicamentoService, PacienteService,
  RegistroRetiradaService, RetiradaService, ServidorService, UnidadeSaudeService, UsuarioService];


const modelController = [ItemMedicamentoController, MedicamentoController, PessoaController,
  RetiradaController, UnidadeSaudeController, UsuarioController]

@Module({
  controllers: [...modelController],
  providers: [...modelService]
})
export class PostoModule { }
