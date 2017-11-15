const express = require("express");
const app = express();
const home = require('./controllers/home');
const graphqlHTTP = require('express-graphql');

const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');
const path = require('path');

const islington = require('./models/islington');

const grapqlSchema = buildSchema(
  readFileSync(path.join(__dirname, './graphql/schema.graphql'), 'utf8')
);

const getBuildings = async () => {
  return await islington.find();
}

app.use('/', home);

app.use('/graphql', graphqlHTTP({
  schema: grapqlSchema,
  graphiql: true,
  rootValue: {
    getBuildings 
  }
}));
module.exports = app;
