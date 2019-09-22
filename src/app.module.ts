import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioE } from "./entidades/usuarioE.entity";
import { PostoController } from "./posto/posto.controller";
import { PostoService } from "./posto/posto.service";

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
  controllers: [AppController, PostoController],
  providers: [AppService, PostoService]
})
export class AppModule {}
