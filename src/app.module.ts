import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioE } from "./entidades/UsuarioE.entity";
import { UsuarioController } from "./controller/Usuario.controller";
import { UsuarioService } from "./service/Usuario.service";
import { UnidadeSaudeE } from "./entidades/UnidadeSaude.entity";
import { UnidadeSaudeController } from "./controller/unidade-saude.controller";
import { UnidadeSaudeService } from "./service/unidade-saude.service";
import { ItemMedicamentoService } from "./service/item-medicamento.service";
import { MedicamentoService } from "./service/medicamento.service";
import { PacienteService } from "./service/paciente.service";
import { RegistroRetiradaService } from "./service/registro-retirada.service";
import { RetiradaService } from "./service/retirada.service";
import { ServidorService } from "./service/servidor.service";
import { ItemMedicamentoController } from "./controller/item-medicamento.controller";
import { MedicamentoController } from "./controller/medicamento.controller";
import { PessoaController } from "./controller/pessoa.controller";
import { RetiradaController } from "./controller/retirada.controller";
import { ItemMedicamentoE } from "./entidades/ItemMedicamentoE.entity";
import { MedicamentoE } from "./entidades/MedicamentoE.entity";
import { PessoaE } from "./entidades/PessoaE.entity";
import { RetiradaE } from "./entidades/RetiradaE.entity";
import { PessoaService } from "./service/pessoa.service";
import { GerenteService } from "./service/gerente.service";

const modelService = [UsuarioService, AppService];


const modelController = [UsuarioController, AppController];

const modelEntity = [UsuarioE];
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "nest",
      password: "app",
      database: "postoapp_db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    TypeOrmModule.forFeature([...modelEntity])
  ],
  controllers: [...modelController],
  providers: [...modelService]
})
export class AppModule { }
