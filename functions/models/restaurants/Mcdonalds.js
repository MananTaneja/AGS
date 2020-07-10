const Sequelize = require("sequelize");

const db = require("../../config/db");

const Mcdonalds = db.define(
  "McdMenu",
  {
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    MenuItem: {
      type: Sequelize.STRING(100),
    },
    ItemPrice: {
      type: Sequelize.INTEGER,
    },
    Picture: {
      type: Sequelize.STRING(45),
    },
    Category: {
      type: Sequelize.STRING(45),
    },
    Rest_ID: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "McdMenu",
  }
);

module.exports = Mcdonalds;
