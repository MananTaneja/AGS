const express = require("express");
const con = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("http://localhost:3000/login");
});

// app.get("/connect", (req, res) => {
//   con.query("Select * from Merchant", (err, res, fields) => {
//     console.log(fields);
//   });
// });

// app.post("/login",(req,res)=>{
//  console.log('Got body:', req.body);
//  res.redirect("http://localhost:3000");

// });

// Routing

app.use("/login", require("./routes/login"));

app.use("/mcdonalds", require("./routes/mcdonalds"));

app.listen(port, () => console.log(`Server started on port ${port}`));
