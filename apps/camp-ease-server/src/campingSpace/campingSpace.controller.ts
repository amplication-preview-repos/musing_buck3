import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampingSpaceService } from "./campingSpace.service";
import { CampingSpaceControllerBase } from "./base/campingSpace.controller.base";

@swagger.ApiTags("campingSpaces")
@common.Controller("campingSpaces")
export class CampingSpaceController extends CampingSpaceControllerBase {
  constructor(protected readonly service: CampingSpaceService) {
    super(service);
  }
}
