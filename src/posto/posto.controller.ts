import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { DaoModule } from 'src/dao/dao.module';


@Controller('posto')
export class PostoController {

    //Crud Usuario
    @Post()
    criarUsuario(@Body() DaoModule: DaoModule) {

        return "msg para nao dar erro";
    }

    @Get()
    buscarUsuario() {
        return "msg para nao dar erro";
    }

    @Put('id')
    atualizarUsuario(@Body() usuario: DaoModule) {
        return "msg para nao dar erro";
    }

    @Delete(":id")
    deletarUsuario() {
        return "msg para nao dar erro";
    }

    //CRUD MEDICAMENTO
    @Post()
    criarMedicamento(@Body() DaoModule: DaoModule) {
        return "msg para nao dar erro";
    }
    @Get()
    buscarMedicamento() {
        return "msg para nao dar erro";
    }

    @Put('id')
    atualizarMedicamento(@Body() usuario: DaoModule) {
        return "msg para nao dar erro";
    }

    @Delete(":id")
    deletarMedicamento() {
        return "msg para nao dar erro";
    }

    //Crud PACIENTE
    @Post()
    criarPaciente(@Body() DaoModule: DaoModule) {
        return "msg para nao dar erro";
    }
    @Get()
    buscarPaciente() {
        return "msg para nao dar erro";
    }

    @Put('id')
    atualizarPaciente(@Body() usuario: DaoModule) {
        return "msg para nao dar erro";
    }

    @Delete(":id")
    deletarPaciente() {
        return "msg para nao dar erro";
    }


}
