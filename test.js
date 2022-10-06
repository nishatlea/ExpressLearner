//for logging into mysql in cmd
//mysql -u root -p
//SELECT DATABASE(); return the name of the current database
//SHOW DATABASES; show all the database name
//show tables;
//-.- not necessary to connect with mysql community
//connecting with xampp mysql
//sudo /opt/lampp/lampp start
//sudo /opt/lampp/lampp stop

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("edoverse-nft-db", "root", "", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
