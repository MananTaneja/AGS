const express = require("express");
const router = express.Router();
const Mcdonalds = require("../models/restaurants/Mcdonalds");
const Menudetails = require("../models/restaurants/Menudetails");
const Merchant = require("../models/Merchant");

const Lmao = require("../models/restaurants/Lmao");

// Code for a-la carte
// router.get("/table/:table_id", (req, res) => {
//   console.log("table number at mcd is: " + req.params.table_id);
//   res.redirect("http://localhost:3000/");
// });

router.get("/:restaurant", (req, res) => {
  const restaurant = req.params.restaurant;
  console.log(`the client side is requesting for menu details: ${restaurant}`);
  const dictionary = {
    MCD: 11,
    KFC: 10,
  };
  //console.log(`${dictionary[restaurant]}`);
  //dictionary[restaurant]
  Menudetails.findAll({
    where: { restID: dictionary[restaurant] },
    attributes: ["menuID", "menuItem", "itemPrice", "category", "restID"],
  })
    .then((menu) => {
      res.json(menu);
      return null;
    })
    .catch((err) => console.log(err));
});

module.exports = router;
