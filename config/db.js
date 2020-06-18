const Sequelize = require("sequelize");

const sequelize = new Sequelize("Restaurant", "admin", "password", {
  host: "database-2.cgqf9yydttci.us-east-2.rds.amazonaws.com",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// To update database according to model
// WARNING: WILL DELETE ALL THE DATA
// sequelize.sync();

module.exports = sequelize;
