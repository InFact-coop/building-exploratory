require("env2")("./config.env");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DB_URI = process.env.prod ?  process.env.MONGODB_URI : process.env.MONGO_DB_URI;

mongoose.Promise = global.Promise;

mongoose.connect(DB_URI, { useMongoClient: true }).then(db => {
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("connected to mongoose");
  });
});

const islingtonSchema = new Schema({
  id: Number,
  street_number: String,
  street_name: String,
  building_name: String,
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
  featured_image: String,
  second_image: String,
  third_image: String,
  fourth_image: String,
  fifth_image: String
});

const Islington = mongoose.model("Islington", islingtonSchema);

module.exports = Islington;
