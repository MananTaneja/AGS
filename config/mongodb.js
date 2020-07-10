const mongoose = require("mongoose");
const keys = require("./keys");

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((e) => {
    console.log("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
