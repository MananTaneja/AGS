const Sequelize = require("sequelize");

const db = require("../config/db");

const Customer = db.define(
  "customer",
  {
    phoneNumber: {
      type: Sequelize.STRING(50),
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(45),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Customer;
