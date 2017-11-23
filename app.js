const express = require("express");
const app = express();
const path = require('path');
const graphQL = require("./middleware/graphql");


app.use('/InFact-coop/building-exploratory/', express.static(path.resolve(__dirname, './build')));
app.use('/graphql', graphQL);

app.get('/*', (req,res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
})

module.exports = app;
