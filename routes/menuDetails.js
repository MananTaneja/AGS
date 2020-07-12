const express = require("express");
const router = express.Router();
const Sample = require("../models/restaurants/Sample");

router.get("/:restaurant", (req, res) => {
  const restaurantName = req.params.restaurant;
  resolveModel(restaurantName);

  Sample.find()
    .then((menu) => {
      res.json(menu);
    })
    .catch((err) =>
      res.status(404).json({
        notFound: "sample not found",
      })
    );
});

function resolveModel(restaurantName) {}

module.exports = router;
