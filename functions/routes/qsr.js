const express = require("express");
const router = express.Router();
const Merchant = require("../models/Merchant");

router.get("/:restaurant/branch-:branch_id", (req, res) => {
  const restaurantChain = req.params.restaurant;
  const branchId = req.params.branch_id;
  console.log(`QR code making request for restaurant: ${restaurantChain}`);
  Merchant.findOne({
    attributes: ["ownerName"],
    where: {
      restName: restaurantChain,
    },
  })
    .then((merchant) => {
      if (merchant) {
        // Merchant exists
        // res.json({
        //   merchantName: merchant.ownerName,
        //   restaurant: restaurantChain,
        //   branch: branchId,
        // });

        res.redirect(`http://localhost:3000/restaurant/${restaurantChain}`);
      } else {
        res.send(`No merchant found with Restaurant Name: ${restaurantChain}`);
      }
      return null;
    })
    .catch((err) => {
      res.send(`${err}`);
    });
});

module.exports = router;
