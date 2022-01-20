import { ArgsType, Field } from "@nestjs/graphql";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@ArgsType()
class DeleteBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
}

export { DeleteBookArgs };
