import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookWhereInput } from "./BookWhereInput";
import { Type } from "class-transformer";
import { BookOrderByInput } from "./BookOrderByInput";

@ArgsType()
class BookFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BookWhereInput,
  })
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: BookWhereInput;

  @ApiProperty({
    required: false,
    type: BookOrderByInput,
  })
  @Field(() => BookOrderByInput, { nullable: true })
  @Type(() => BookOrderByInput)
  orderBy?: BookOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BookFindManyArgs };
