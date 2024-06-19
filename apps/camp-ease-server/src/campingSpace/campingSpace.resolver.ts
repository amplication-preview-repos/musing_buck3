import * as graphql from "@nestjs/graphql";
import { CampingSpaceResolverBase } from "./base/campingSpace.resolver.base";
import { CampingSpace } from "./base/CampingSpace";
import { CampingSpaceService } from "./campingSpace.service";

@graphql.Resolver(() => CampingSpace)
export class CampingSpaceResolver extends CampingSpaceResolverBase {
  constructor(protected readonly service: CampingSpaceService) {
    super(service);
  }
}
