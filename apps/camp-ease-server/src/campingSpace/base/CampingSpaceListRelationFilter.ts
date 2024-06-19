/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CampingSpaceWhereInput } from "./CampingSpaceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CampingSpaceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CampingSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => CampingSpaceWhereInput)
  @IsOptional()
  @Field(() => CampingSpaceWhereInput, {
    nullable: true,
  })
  every?: CampingSpaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => CampingSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => CampingSpaceWhereInput)
  @IsOptional()
  @Field(() => CampingSpaceWhereInput, {
    nullable: true,
  })
  some?: CampingSpaceWhereInput;

  @ApiProperty({
    required: false,
    type: () => CampingSpaceWhereInput,
  })
  @ValidateNested()
  @Type(() => CampingSpaceWhereInput)
  @IsOptional()
  @Field(() => CampingSpaceWhereInput, {
    nullable: true,
  })
  none?: CampingSpaceWhereInput;
}
export { CampingSpaceListRelationFilter as CampingSpaceListRelationFilter };
