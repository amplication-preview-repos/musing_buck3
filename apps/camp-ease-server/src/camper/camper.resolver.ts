import * as graphql from "@nestjs/graphql";
import { CamperResolverBase } from "./base/camper.resolver.base";
import { Camper } from "./base/Camper";
import { CamperService } from "./camper.service";

@graphql.Resolver(() => Camper)
export class CamperResolver extends CamperResolverBase {
  constructor(protected readonly service: CamperService) {
    super(service);
  }
}
