import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { DespesaType } from "../typeDefs/despesa";

import Despesa from "../../models/Despesa";

export const CREATE_DESPESA = {
  type: DespesaType,
  args: {
    name: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    category: { type: GraphQLString },
    value: { type: GraphQLFloat },
  },
  async resolve(parent: any, args: any) {
    const despesa = new Despesa(args);
    await despesa.save();

    return args;
  },
};

export const UPDATE_DESPESA = {
  type: DespesaType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    category: { type: GraphQLString },
    value: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    await Despesa.findByIdAndUpdate(
      args.id,
      {
        name: args.name,
        releaseDate: args.releaseDate,
        category: args.category,
        value: args.value,
      },
      (error, docs) => {
        if (error) {
          console.log(error);
        } else {
          console.log("updated despesa :", docs);
        }
      },
    );

    return args;
  },
};

export const DELETE_DESPESA = {
  type: DespesaType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    await Despesa.findByIdAndDelete(args.id);
    return args;
  },
};
