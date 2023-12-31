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
import { ServiceWhereInput } from "./ServiceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ServiceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ServiceWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceWhereInput)
  @IsOptional()
  @Field(() => ServiceWhereInput, {
    nullable: true,
  })
  every?: ServiceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceWhereInput)
  @IsOptional()
  @Field(() => ServiceWhereInput, {
    nullable: true,
  })
  some?: ServiceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceWhereInput)
  @IsOptional()
  @Field(() => ServiceWhereInput, {
    nullable: true,
  })
  none?: ServiceWhereInput;
}
export { ServiceListRelationFilter as ServiceListRelationFilter };
