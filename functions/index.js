const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const con = require("./config/db");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const path = require("path");
const mongodb = require("./config/mongodb");

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport Middleware
// app.use(passport.initialize());

// Passport config
// require("./config/passport")(passport);

// Cors Middleware
app.use(cors());

app.get("/firebaseTrial", (req, res) => {
  res.json({
    msg: "Success from Firebase",
  });
});

// Routing URLS

app.use("/login", require("./routes/login"));

app.use("/menudetails", require("./routes/menuDetails"));

app.use("/ongo/qsr", require("./routes/qsr"));

app.use("/api", require("./routes/notifications"));

app.use("/test", require("./routes/test"));

app.use("/s3image", require("./routes/s3image"));

app.use("/order", require("./routes/orderdetails"));

exports.app = functions.https.onRequest(app);
