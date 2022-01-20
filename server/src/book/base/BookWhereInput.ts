import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorWhereUniqueInput } from "../../author/base/AuthorWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class BookWhereInput {
  @ApiProperty({
    required: false,
    type: () => AuthorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthorWhereUniqueInput)
  @IsOptional()
  @Field(() => AuthorWhereUniqueInput, {
    nullable: true,
  })
  author?: AuthorWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  authorName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;
}
export { BookWhereInput };
