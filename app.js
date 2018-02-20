const express = require("express");
const app = express();
const path = require('path');
const graphQL = require("./middleware/graphql");
const migrate = require("./migrateSpreadsheet");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/InFact-coop/building-exploratory/', express.static(path.resolve(__dirname, './build')));
app.use('/graphql', graphQL);

app.use('/api/push-latest-changes-from-google-sheet', (req,res) => {
  console.log('you are in push data latest api') // not logigng
  migrate(() => {
    console.log('done');
    res.json({
      type: "done",
    });
  })
});

app.get('/*', (req,res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
})

module.exports = app;
