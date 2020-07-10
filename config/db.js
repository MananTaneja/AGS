const Sequelize = require("sequelize");
const keys = require("./keys");

const sequelize = new Sequelize(
  "Restaurant",
  keys.dbUserName,
  keys.dbPassword,
  {
    host: keys.dbHostname,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully1");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// To update database according to model
// WARNING: WILL DELETE ALL THE DATA
// sequelize.sync();

module.exports = sequelize;
