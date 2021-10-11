const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    require: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  evnet: {
    type: String,
    default: "100m",
  },
});

const MenRanking =  new mongoose.model("MenRanking", menSchema)

module.exports = MenRanking;