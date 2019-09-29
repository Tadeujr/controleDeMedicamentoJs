import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioE } from "./entidades/UsuarioE.entity";
import { UsuarioController } from "./controller/Usuario.controller";
import { UsuarioService } from "./service/Usuario.service";


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
    TypeOrmModule.forFeature([UsuarioE])
  ],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioService]
})
export class AppModule { }
