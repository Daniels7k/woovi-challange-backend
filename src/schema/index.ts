import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  CREATE_DESPESA,
  DELETE_DESPESA,
  UPDATE_DESPESA,
} from "./mutations/despesa";

import { CREATE_USER } from "./mutations/user";
import { DESPESAS } from "./queries/despesa";
import { GET_ALL_USERS } from "./queries/user";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    despesas: DESPESAS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    createDespesa: CREATE_DESPESA,
    updateDespesa: UPDATE_DESPESA,
    deleteDespesa: DELETE_DESPESA,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
