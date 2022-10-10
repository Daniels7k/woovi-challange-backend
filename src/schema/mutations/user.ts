import { GraphQLString } from "graphql";
import { UserType } from "../typeDefs/user";

import User from "../../models/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const user = new User(args);
    await user.save();

    return args;
  },
};
