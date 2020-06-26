const Sequelize = require("sequelize");
const db = require("../config/db");

const Merchant = db.define(
  "merchant",
  {
    rest_id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
    },
    restName: {
      type: Sequelize.STRING(45),
    },
    active: {
      type: Sequelize.INTEGER(11),
    },
    email: {
      type: Sequelize.STRING(100),
    },
    OnBoarded: {
      type: Sequelize.INTEGER(11),
    },
    ownerName: {
      type: Sequelize.STRING(100),
    },
    password: {
      type: Sequelize.STRING(100),
    },
  },
  {
    timestamps: false,
    tableName: "Merchants",
  }
);

module.exports = Merchant;
