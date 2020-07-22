const express = require("express");
const router = express.Router();
const Sample = require("../models/restaurants/Sample");
const db = require("../config/mongodb");
const mongoose = require("mongoose");
//const Sampleaddongrp = require("../models/Sampleaddongrp");
const Sampleaddon = require("../models/Sampleaddon");

router.get("/sample", (req, res) => {
  res.json({
    msg: "Route Works",
  });
});

router.post("/item", (req, res) => {
  var item = {
    itemId: req.body.menuID,
    itemPrice: req.body.itemPrice,
    itemName: req.body.itemName,
  };
  mongoose.set("useFindAndModify", false);
  Sample.findOneAndUpdate(
    {
      categoryName: reqq.body.mainCategory,
      "subCategories.subCategoryName": req.body.subCategory,
    },
    {
      $push: {
        "subCategories.$[].items": {
          itemId: req.body.menuID,
          itemPrice: req.body.itemPrice,
          itemName: req.body.itemName,
        },
      },
    },
    { upsert: true },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/delete", (req, res) => {
  var item = {
    itemId: req.body.menuID,
    itemPrice: req.body.itemPrice,
    itemName: req.body.itemName,
  };
  mongoose.set("useFindAndModify", false);
  Sample.findOneAndUpdate(
    {
      categoryName: mainCategory,
      "subCategories.subCategoryName": req.body.subCategory,
    },
    {
      $pull: {
        "subCategories.$[].items": {
          itemId: req.body.menuID,
        },
      },
    },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("hello");
        res.send(result);
      }
    }
  );
});

router.post("/update", (req, res) => {
  var item = {
    itemId: req.body.menuID,
    itemPrice: req.body.itemPrice,
    itemName: req.body.itemName,
  };
  //   mongoose.set('useFindAndModify', false);
  // Sample.findOneAndUpdate({categoryName: mainCategory},{"subCategories.subCategoryName": req.body.},{ "subCategories..items":{
  //   itemId : req.body.menuID,
  //   itemPrice :req.body.itemPrice,
  //   itemName :"fanta"

  // } }, function(err, result) {
  //   if (err) {
  //    console.log(err)
  //   } else {
  //     console.log("hello")
  //     res.send(result);
  //   }
  // })
  // Sample.find({categoryName: mainCategory,"subCategories.subCategoryName": req.body.})
  //   .forEach(function (doc) {
  //     doc.subCategories.forEach(function (datastream) {
  //       if (dataStream.componentId === componentId1) {
  //         dataStream.fields.forEach(function(fields){
  //          // you can also write condition for matching condition in field
  //            dataStream.fields.key="";
  //            dataStream.fields.value="";
  //            dataStream.fields.type="";
  //          }
  //       }
  //     });
  //     db.collection.save(doc);
  //   });
});

router.post("/subcategory", (req, res) => {
  var sub = {
    subCategoryName: req.body.subCategory,
    items: [],
  };
  mongoose.set("useFindAndModify", false);
  Sample.findOneAndUpdate(
    { categoryName: req.body.mainCategory },
    { $push: { subCategories: [sub] } },
    function (err, result) {
      if (err) {
        console.log(resssss);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/category", (req, res) => {
  const catdata = {
    categoryName: req.body.mainCategory,
    subCategories: [],
  };

  Sample.create(catdata, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// router.post
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

router.get("/addonall", (req, res) => {
  Sampleaddon.find()
    .then((addon) => {
      res.json(addon);
    })
    .catch((err) =>
      res.status(404).json({
        notFound: "sample not found",
      })
    );
});

router.get("/addongrpall", (req, res) => {
  Sampleaddongrp.find()
    .then((addon) => {
      res.json(addon);
    })
    .catch((err) =>
      res.status(404).json({
        notFound: "sample not found",
      })
    );
});
router.post("/addongrp", (req, res) => {
  var item = {
    AddOnGroupName: req.body.addOnGroupName,
    items: req.body.addOnGroupItems,
  };
  mongoose.set("useFindAndModify", false);
  Sampleaddongrp.findOneAndUpdate(
    { res_id: "test" },
    { $push: { AddOnGroups: [item] } },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addon", (req, res) => {
  var sub = {
    itemName: req.body.addOnName,
    itemPrice: req.body.addOnPrice,
    Veg: req.body.addOnVeg,
    addonId: req.body.addOnId,
  };
  mongoose.set("useFindAndModify", false);
  Sampleaddon.findOneAndUpdate(
    { res_id: "test" },
    { $push: { Addons: [sub] } },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        console.log("hello");
        res.send(result);
      }
    }
  );
});

router.post("/deleteaddon", (req, res) => {
  // var item = {
  //   itemId : req.body.menuID,
  //   itemPrice :req.body.itemPrice,
  //   itemName :req.body.itemName
  // };
  mongoose.set("useFindAndModify", false);
  Sampleaddon.findOneAndUpdate(
    { res_id: "test" },
    { $pull: { Addons: { itemName: req.body.addOnName } } },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("hello");
        res.send(result);
      }
    }
  );
});
router.post("/deleteaddongrp", (req, res) => {
  // var item = {
  //   itemId : req.body.menuID,
  //   itemPrice :req.body.itemPrice,
  //   itemName :req.body.itemName
  // };
  mongoose.set("useFindAndModify", false);
  Sampleaddongrp.findOneAndUpdate(
    { res_id: "test" },
    { $pull: { AddOnGroups: { AddOnGroupName: req.body.addOnGroupName } } },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("hello");
        res.send(result);
      }
    }
  );
});

router.post("/render", (req, res) => {
  // var item = {
  //   itemId : req.body.menuID,
  //   itemPrice :req.body.itemPrice,
  //   itemName :req.body.itemName
  // };
  //console.log(req.body.item)

  //console.log(addonarr[0]);

  //res.send("got it");
  //mongoose.set('useFindAndModify', false);
  //Sampleaddon.find({"Addons._id":addonarr[0]},function(err, res)
  //console.log(req.body.item)

  Sampleaddon.aggregate(
    [{ $unwind: "$Addons" }, { $match: { "Addons._id": req.body.item } }],
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        //console.log("hello")
        //console.log(result)
        res.send(result);
      }
    }
  );

  //     Sampleaddon.findOneAndUpdate({res_id:"test"},{"$pull": {AddOnGroups:{AddOnGroupName:req.body.addOnGroupName} }}, function(err, result) {
  //     if (err) {
  //      console.log(err)
  //     } else {
  //       console.log("hello")
  //       res.send(result);
  //     }
  //   })
});

module.exports = router;
