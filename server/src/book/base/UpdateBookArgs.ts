import { ArgsType, Field } from "@nestjs/graphql";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";
import { BookUpdateInput } from "./BookUpdateInput";

@ArgsType()
class UpdateBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
  @Field(() => BookUpdateInput, { nullable: false })
  data!: BookUpdateInput;
}

export { UpdateBookArgs };
