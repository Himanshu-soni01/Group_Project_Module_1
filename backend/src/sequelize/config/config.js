require('dotenv').config();
module.exports = {
 
    HOST: process.env.DBHOSTNAME,
    USER: process.env.DBUSER,
    PASSWORD: process.env.DBPASSWORD,
    DB: process.env.DATABASE,
    dialect: 'mysql',
    logging:true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    migrations: {
      directory: './migrations',
    },

  };