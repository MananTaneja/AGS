const express = require("express");
const router = express.Router();
const Merchant = require("../models/Merchant");

router.get("/:restaurant/branch-:branch_id", (req, res) => {
  const restaurantChain = req.params.restaurant;
  const branchId = req.params.branch_id;
  console.log(`Front end making request for Owner Name`);
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

        res.redirect(`http://localhost:3000/${restaurantChain}/${branchId}`);
      }
    })
    .catch((err) => {
      res.send(`No merchant found with Restaurant Name: ${restaurantChain}`);
    });
});

module.exports = router;
