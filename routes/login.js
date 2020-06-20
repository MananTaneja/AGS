const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Logging in customer here

router.post("/", (req, res) => {
  const customerData = {
    phoneNumber: req.body.phoneNumber,
    name: req.body.name,
  };
  // checks if phoneNumber already exists in the database
  Customer.findOne({
    where: {
      phoneNumber: req.body.phoneNumber,
    },
  })
    .then((customer) => {
      if (!customer) {
        // Customer does't exist -> Adding customer
        Customer.create(customerData);
        console.log("New Customer Added");
      } else {
        console.log("Customer Already Exists");
      }

      // Generating token for the customer to log in
      jwt.sign(
        customerData,
        keys.secretOrKey,
        { expiresIn: 3600 },
        (err, token) => {
          console.log("Bearer " + token);
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        }
      );
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

module.exports = router;
