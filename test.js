//for logging into mysql in cmd
//mysql -u root -p
//SELECT DATABASE(); return the name of the current database
//SHOW DATABASES; show all the database name
//show tables;
//-.- not necessary to connect with mysql community
//connecting with xampp mysql
//sudo /opt/lampp/lampp start
//sudo /opt/lampp/lampp stop
//sudo /etc/init.d/mysql stop
//sudo  /opt/lampp/lampp restart

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

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

// Create a new user
//const jane = User.create({ firstName: "Jane", lastName: "Doe" });
//console.log("Jane's auto-generated ID:", jane.id);
async function DataVal() {
  // Find all users
  users = await User.findAll();
  //console.log(users); // true
  console.log("Read Table data: ");
  //await console.log(users.firstName);
  console.log(users.every((user) => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));
}

DataVal();
