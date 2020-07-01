const express = require("express");
const router = express.Router();
const Mcdonalds = require("../models/restaurants/Mcdonalds");
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
    mcdonalds: Mcdonalds,
    Lmao: Lmao,
  };
  // console.log(`${dictionary[restaurant]}`);
  dictionary[restaurant]
    .findAll({
      attributes: ["menuID", "menuItem", "itemPrice", "category"],
    })
    .then((menu) => {
      res.json(menu);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
