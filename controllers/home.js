const app = require('express');
const router = app.Router();
const path = require("path");

const islington = require("../models/islington");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));

  islington.find().then(res => console.log(res));
});

module.exports = router;