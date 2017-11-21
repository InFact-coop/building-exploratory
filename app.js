const express = require("express");
const app = express();

const graphQL = require("./middleware/graphql");

app.use('/graphql', graphQL);

module.exports = app;
