const express = require("express");
const router = express.Router();
const McdMenu = require("../models/McdMenu");

router.get("/table/:table_id", (req, res) => {
  console.log("table number at mcd is: " + req.params.table_id);
  res.redirect("http://localhost:3000/");
});

router.get("/menudetails", (req, res) => {
  console.log("the client side is requesting for menu details");
  McdMenu.findAll({
    attributes: ["id", "MenuItem", "ItemPrice", "Category"],
  })
    .then((menu) => {
      res.json(menu);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
