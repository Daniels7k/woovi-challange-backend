import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";

export const DespesaType = new GraphQLObjectType({
  name: "Despesa",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    category: { type: GraphQLString },
    value: { type: GraphQLInt },
  }),
});
