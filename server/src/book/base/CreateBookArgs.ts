import { ArgsType, Field } from "@nestjs/graphql";
import { BookCreateInput } from "./BookCreateInput";

@ArgsType()
class CreateBookArgs {
  @Field(() => BookCreateInput, { nullable: false })
  data!: BookCreateInput;
}

export { CreateBookArgs };
