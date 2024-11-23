const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    //console.log(mongodb://localhost:27017/district/);
    await mongoose.connect("mongodb://localhost:27017/district");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
  }
};

module.exports = mongoDB;
