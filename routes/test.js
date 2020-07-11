const express = require("express");
const router = express.Router();
const Sample = require("../models/Sample");
const db = require("../config/mongodb");


router.get("/sample", (req, res) => {
  res.json({
    msg: "Route Works",
  });
});

router.post("/category", (req,res) =>{
  const catdata = {
    categoryName: "pepsi",
    subCategories: [

    ]
  };
  var sub = { subCategoryName: 'drinks', items: []};
  // Sample.create(catdata, function(err, result) {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     console.log(result);
  //     res.send(result);
  //   }
  // });
  Sample.update(
    {   _id: "5f09a246558fb66020c5cb1e"
      //categoryName: "pepsi"  
    }, 
    { $push: { subcategories: sub } }
);

})
router.get("/all", (req, res) => {
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

module.exports = router;
