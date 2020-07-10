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
    return null;
  })
  .catch((err) => {
    console.log(err);
  });

// To update database according to model
// WARNING: WILL DELETE ALL THE DATA
// sequelize.sync();

module.exports = sequelize;
