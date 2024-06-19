import { Module } from "@nestjs/common";
import { CampingSpaceModuleBase } from "./base/campingSpace.module.base";
import { CampingSpaceService } from "./campingSpace.service";
import { CampingSpaceController } from "./campingSpace.controller";
import { CampingSpaceResolver } from "./campingSpace.resolver";

@Module({
  imports: [CampingSpaceModuleBase],
  controllers: [CampingSpaceController],
  providers: [CampingSpaceService, CampingSpaceResolver],
  exports: [CampingSpaceService],
})
export class CampingSpaceModule {}
