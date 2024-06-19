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
import { CamperWhereUniqueInput } from "../../camper/base/CamperWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { CampingSpaceWhereUniqueInput } from "../../campingSpace/base/CampingSpaceWhereUniqueInput";

@InputType()
class BookingUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CamperWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CamperWhereUniqueInput)
  @IsOptional()
  @Field(() => CamperWhereUniqueInput, {
    nullable: true,
  })
  camper?: CamperWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CampingSpaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CampingSpaceWhereUniqueInput)
  @IsOptional()
  @Field(() => CampingSpaceWhereUniqueInput, {
    nullable: true,
  })
  campingSpace?: CampingSpaceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;
}

export { BookingUpdateInput as BookingUpdateInput };
