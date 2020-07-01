const Sequelize = require("sequelize");

const db = require("../../config/db");

const Lmao = db.define(
  "Lmao",
  {
    menuID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    menuItem: {
      type: Sequelize.STRING(100),
    },
    itemPrice: {
      type: Sequelize.INTEGER,
    },
    picture: {
      type: Sequelize.STRING(45),
    },
    category: {
      type: Sequelize.STRING(45),
    },
    restID: {
      type: Sequelize.INTEGER,
    },
    recommended: {
      type: Sequelize.STRING(100),
    },
    veg: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    glutenFree: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "3_Lmao_Menu_Details",
  }
);

module.exports = Lmao;
