const express = require("express");
const router = express.Router();
const Sample = require("../models/Sample");

router.get("/sample", (req, res) => {
  res.json({
    msg: "Route Works",
  });
});

router.get("/all", (req, res) => {
  Sample.find()
    .then((menu) => {
      res.json(menu);
      return null;
    })
    .catch((err) => {
      res.status(404).json({
        notFound: "sample not found",
      });
      console.log(err);
    });
});

module.exports = router;
