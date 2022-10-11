import { GraphQLList } from "graphql";
import { DespesaType } from "../typeDefs/despesa";

import Despesa from "../../models/Despesa";

export const DESPESAS = {
  type: new GraphQLList(DespesaType),
  resolve() {
    return Despesa.find();
  },
};
