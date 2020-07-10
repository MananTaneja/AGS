const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleSchema = new Schema(
  {
    categoryName: {
      type: String,
    },
    subCategories: [
      {
        subcategoryName: {
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
