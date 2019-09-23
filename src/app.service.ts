import { Injectable } from "@nestjs/common";
import { Usuario } from "./dao/models/usuario.model";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

}
