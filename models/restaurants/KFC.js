const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KFCSchema = new Schema(
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
            itemPicture: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  {
    collection: "2_kfc_menu",
  }
);

module.exports = KFC = mongoose.model("KFCMenu", KFCSchema);
