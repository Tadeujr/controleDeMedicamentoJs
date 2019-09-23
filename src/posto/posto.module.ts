import { Module } from "@nestjs/common";
import { PostoController } from "./posto.controller";
import { PostoService } from "src/posto.service";

@Module({
  controllers: [PostoController],
  providers: [PostoService]
})
export class PostoModule { }
