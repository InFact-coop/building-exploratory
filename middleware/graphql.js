const graphqlHTTP = require("express-graphql");
const islington = require("../models/islington");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");
const path = require("path");

const grapqlSchema = buildSchema(
  readFileSync(path.join(__dirname, "../graphql/schema.graphql"), "utf8")
);

const getBuildings = async () => {
  return await islington.find().sort({ id: 1 });
};

module.exports = graphqlHTTP({
  schema: grapqlSchema,
  graphiql: true,
  rootValue: {
    getBuildings
  }
});
