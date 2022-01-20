import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional, IsDate } from "class-validator";
import { Book } from "../../book/base/Book";
import { Type } from "class-transformer";
@ObjectType()
class Author {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  authorName!: string;

  @ApiProperty({
    required: true,
    type: () => [Book],
  })
  @ValidateNested()
  @Type(() => Book)
  @IsOptional()
  books?: Array<Book>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Author };
