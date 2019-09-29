import { Module } from "@nestjs/common";
import { UsuarioController } from "src/controller/Usuario.controller";
import { UsuarioService } from "src/service/Usuario.service";


@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule { }
