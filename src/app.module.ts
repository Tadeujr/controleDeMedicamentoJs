import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { MedicamentoModule } from './medicamento/medicamento.module';
import { PostoModule } from './posto/posto.module';
import { DaoModule } from './dao/dao.module';

@Module({
  imports: [PessoaModule, MedicamentoModule, PostoModule, DaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
