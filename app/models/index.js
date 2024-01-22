 
const Sequelize = require("sequelize");

const  dbHost=process.env.DB_HOST;
const  dbPort=process.env.DB_PORT;
const  dbUser=process.env.DB_USER;
const  dbPassword=process.env.DB_PASSWORD;
const  dbDatabase="MyApp";


const dialect="mysql";



const sequelize = new Sequelize(
  dbDatabase,
  dbUser,
  dbPassword,
  {
    host: dbHost,
    dialect: "mysql",
    operatorsAliases: '0',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 

db.user = require("./user.model.js")(sequelize, Sequelize);
 

//db.sequelize.sync();

 
module.exports = db;