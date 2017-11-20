const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DB_URI = "mongodb://localhost/islingtonlocallist";

mongoose.Promise = global.Promise;

mongoose.connect(DB_URI, { useMongoClient: true }).then(db => {
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("connected to mongoose");
  });
});

const islingtonSchema = new Schema({
  street_number: String,
  street_name: String,
  postcode: String,
  ward: String,
  conservation_area: String,
  date_built_actual: String,
  date_built_estimate: String,
  building_type: String,
  current_use: String,
  description: String,
  date_local_listing: String,
  significance: String,
  recommendation: String,
  latitude: String,
  longitude: String
});

const Islington = mongoose.model("Islington", islingtonSchema);

module.exports = Islington;
