const express = require("express");
const router = express.Router();
const Merchant = require("../models/Merchant");

router.get("/:restaurant", (req, res) => {
  const restaurantName = req.params.restaurant;
  console.log(`QR code making request for restaurant: ${restaurantName}`);
  Merchant.findOne({
    attributes: ["ownerName"],
    where: {
      restName: restaurantName,
    },
  })
    .then((merchant) => {
      if (merchant) {
        res.redirect(`http://localhost:3000/restaurant/${restaurantName}`);
      } else {
        res.send(`No merchant found with Restaurant Name: ${restaurantName}`);
      }
    })
    .catch((err) => {
      res.send(
        `Database error when searching for Restaurant Name: ${restaurantName}`
      );
    });
});

module.exports = router;
