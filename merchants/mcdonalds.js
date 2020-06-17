const express = require("express");
const router = express.Router();
const con = require("../config/db");

router.get("/table/:table_id", (req, res) => {
  console.log("table number at mcd is: " + req.params.table_id);
  res.redirect("http://localhost:3000/");
});

router.get("/menudetails", (req, res) => {
  console.log("the client side is requesting for menu details");

  res.json(menuData);
});

module.exports = router;
