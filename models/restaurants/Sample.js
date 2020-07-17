const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleSchema = new Schema(
  {
    categoryName: {
      type: String,
    },
    subCategories: [
      {
        subCategoryName: {
          type: String,
        },
        items: [
          {
            itemId: {
              type: Number,
            },
            itemName: {
              type: String,
            },
            itemPrice: {
              type: Number,
            },
            veg:{
              type:Boolean,
            },
            gluten:
            {
              type:Boolean,
            },
            itemDescription:
            {
              type:String,
            },
            itemAddongrp:
            {
              type:String,
            },
            itemAddon:
            {
              type:String,
            }

          },
        ],
      },
    ],
  },
  {
    collection: "sampleMenu",
  }
);

module.exports = Sample = mongoose.model("sampleMenu", SampleSchema);
