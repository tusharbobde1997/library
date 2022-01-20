import { ArgsType, Field } from "@nestjs/graphql";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@ArgsType()
class BookFindUniqueArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
}

export { BookFindUniqueArgs };
