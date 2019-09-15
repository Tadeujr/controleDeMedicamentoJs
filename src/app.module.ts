import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PessoaModule } from "./pessoa/pessoa.module";
import { MedicamentoModule } from "./medicamento/medicamento.module";
import { PostoModule } from "./posto/posto.module";
import { DaoModule } from "./dao/dao.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioE } from "./entidades/usuarioE.entity";

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
    TypeOrmModule.forFeature([UsuarioE]),
    PessoaModule,
    MedicamentoModule,
    PostoModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
