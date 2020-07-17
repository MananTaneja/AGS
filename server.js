const express = require("express");
const cors = require("cors");
const mongodb = require("./config/mongodb");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const mongoose = require("mongoose");
// const path = require("path");

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection

// // Passport Middleware
// app.use(passport.initialize());

// // Passport config
// require("./config/passport")(passport);

// Cors Middleware
app.use(cors());

app.get("/", (req, res) => {
  res.redirect("http://localhost:3000/login");
});

// Routing URLS

app.use("/login", require("./routes/login"));

app.use("/menudetails", require("./routes/menuDetails"));

app.use("/ongo/qsr", require("./routes/qsr"));

app.use("/test", require("./routes/test"));

app.use("/s3image", require("./routes/s3image"));
app.use("/order",require("./routes/orderdetails"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
