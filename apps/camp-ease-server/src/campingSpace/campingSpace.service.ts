import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampingSpaceServiceBase } from "./base/campingSpace.service.base";

@Injectable()
export class CampingSpaceService extends CampingSpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
