const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: String,
  description: String,
  image: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfaMTs-Vl5LgMc55whkDypPSHXWX9lldSBg&s",
    set: (v) =>
      v === ""
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfaMTs-Vl5LgMc55whkDypPSHXWX9lldSBg&s"
        : v,
  },
  price: Number,
  location:String,
  country:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;