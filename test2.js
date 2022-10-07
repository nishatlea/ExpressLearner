const { Sequelize } = require("sequelize");
const dbPoolConfig = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};
const sequelize = new Sequelize("DemoDatabase", "root", "", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  operatorsAliases: false,
  pool: dbPoolConfig,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const Notification = sequelize.define(
  "Notification",
  {
    // Model attributes are defined here
    notificationText: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    notificationTitle: {
      type: Sequelize.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    createdBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    updatedBy: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      //allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Notification === sequelize.models.Notification); // true

Notification.sync();

var express = require("express");
var router = express.Router();
module.exports = router;

// // Create a new user
// const newnote = Notification.create({
//   notificationText: "New NFT in Town! Check it out",
//   notificationTitle: "New NFT",
//   createdBy: "Okamoto",
// });
// //console.log("Jane's auto-generated ID:", jane.id);

async function DataVal() {
  // Find all users
  notifications = await Notification.findAll();
  //console.log(users); // true
  console.log("Read Table data: ");
  //await console.log(users.firstName);
  //console.log(notifications.every((user) => user instanceof User)); // true
  console.log("All users:", JSON.stringify(notifications, null, 2));

  router.get("/", function (req, res) {
    res.json(notifications);
  });

  //post method
  //to use post method through curl operation data format should be:
  //curl -d '{"notificationText": "NFT sold out!" , "notificationTitle": "No NFT" , "createdBy": "Haruka" }' -H "Content-Type: application/json" -X POST http://localhost:3005/test2

  router.post("/", function (req, res) {
    const newnote = Notification.create({
      notificationText: req.body.notificationText,
      notificationTitle: req.body.notificationTitle,
      createdBy: req.body.createdBy,
    });
    res.json({ message: "New notification created." });
  });
}

DataVal();
