require("env2")("./config.env");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DB_URI = process.env.MONGO_DB_URI;

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
  architectural_style: String,
  building_type: String,
  current_use: String,
  description: String,
  date_local_listing: String,
  significance: String,
  recommendation: String,
  latitude: Number,
  longitude: Number,
  image_main: String,
  image_second: String,
  image_third: String
});

const Islington = mongoose.model("Islington", islingtonSchema);

module.exports = Islington;
