import { Module } from "@nestjs/common";
import { CamperModuleBase } from "./base/camper.module.base";
import { CamperService } from "./camper.service";
import { CamperController } from "./camper.controller";
import { CamperResolver } from "./camper.resolver";

@Module({
  imports: [CamperModuleBase],
  controllers: [CamperController],
  providers: [CamperService, CamperResolver],
  exports: [CamperService],
})
export class CamperModule {}
