import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CamperServiceBase } from "./base/camper.service.base";

@Injectable()
export class CamperService extends CamperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
