const express = require("express");
const cors = require("cors");
// const con = require("./config/db");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
// const path = require("path");

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.use("/mcdonalds", require("./routes/mcdonalds"));

app.use("/ongo/qsr", require("./routes/qsr"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
