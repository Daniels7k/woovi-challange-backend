import { GraphQLList } from "graphql";
import { UserType } from "../typeDefs/User";

import User from "../../models/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find();
  },
};
