import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

const main = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // app.use("/graphql", graphqlHTTP({
  //     schema,
  //     graphiql: true
  // }))

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT:", PORT);
  });
};

main().catch((error) => {
  console.log(error);
});
