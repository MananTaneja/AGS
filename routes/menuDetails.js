const express = require("express");
const router = express.Router();

// Add all the Merchant Menu Models here!
const Sample = require("../models/restaurants/Sample");
const KFC = require("../models/restaurants/KFC");

router.get("/:restaurant", (req, res) => {
  const restaurantName = req.params.restaurant;
  console.log(`Client is requesting menu for ${restaurantName}`);

  Menu = resolveModel(restaurantName);
  if (Menu === "Error") {
    res.status(404).json({
      menuErr: `Sorry! Restaurant ${restaurantName} not found`,
    });
  }

  Menu.find()
    .then((menu) => {
      res.json(menu);
    })
    .catch((err) =>
      res.status(404).json({
        notFound: "sample not found",
      })
    );
});

function resolveModel(restaurantName) {
  // Also update this if a new merchant is onboarded
  merchantMap = {
    mcd: Sample,
    kfc: KFC,
  };

  if (restaurantName in merchantMap) {
    return merchantMap[restaurantName];
  } else {
    return "Error";
  }
}

module.exports = router;
