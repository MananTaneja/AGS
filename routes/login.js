const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

router.post("/", (req, res) => {
  const customerData = {
    phoneNumber: req.body.phoneNumber,
    name: req.body.name,
  };

  Customer.findOne({
    where: {
      phoneNumber: req.body.phoneNumber,
    },
  })
    .then((customer) => {
      if (!customer) {
        Customer.create(customerData);
        res.json({
          msg: "Customer created!",
        });
      } else {
        res.json({
          msg: "Customer already in database",
        });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

module.exports = router;
