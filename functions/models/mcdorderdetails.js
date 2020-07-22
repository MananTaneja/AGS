const Sequelize = require("sequelize");

const db = require("../config/db");

const mcdorderdetails = db.define(
  "mcdorderdetails",
  {
    phoneNumber: {
      type: Sequelize.STRING(10),
      primaryKey: true,
    },
    orderID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    token: {
      type: Sequelize.STRING(100),
    },
    menuID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    }
    customerName: {
      type: Sequelize.STRING(45),
    },
    itemName: {
      type: Sequelize.STRING(45),
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    itemPrice: {
        type: Sequelize.INTEGER,
      },
    status: {
        type: Sequelize.STRING(45),
      },
    time: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    specialRequest: {
        type: Sequelize.STRING(45),
      },
    
  },
  {
    timestamps: false,
    tableName: "12_Fgh_Order_Details",
  }
);

module.exports = mcdorderdetails;
