const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleaddonSchema = new Schema(
  {
    // res_id: {
    //     type: String,
    //   },
    Addons: [
      {
            itemName: {
              type: String,
            },
            itemPrice: {
              type: Number,
            },
            
            Veg:{
              type:Boolean
            },
            addonId:{
              type: String,
            },
          
        
      },
    ],
  },
  {
    collection: "menu_addon",
  }
);

module.exports = Sampleaddon = mongoose.model("menu_addon", SampleaddonSchema);
