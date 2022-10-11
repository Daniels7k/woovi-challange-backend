import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  CREATE_DESPESA,
  DELETE_DESPESA,
  UPDATE_DESPESA,
} from "./mutations/despesa";

import { DESPESAS } from "./queries/despesa";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    despesas: DESPESAS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createDespesa: CREATE_DESPESA,
    updateDespesa: UPDATE_DESPESA,
    deleteDespesa: DELETE_DESPESA,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
