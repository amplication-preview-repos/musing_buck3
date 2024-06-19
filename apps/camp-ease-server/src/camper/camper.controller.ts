import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CamperService } from "./camper.service";
import { CamperControllerBase } from "./base/camper.controller.base";

@swagger.ApiTags("campers")
@common.Controller("campers")
export class CamperController extends CamperControllerBase {
  constructor(protected readonly service: CamperService) {
    super(service);
  }
}
