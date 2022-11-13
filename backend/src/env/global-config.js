require("dotenv").config();

const gEnv = {
  port: process.env.PORT,
  dbhost: process.env.DBHOST,
  dbuser: process.env.DBUSER,
  dbpass: process.env.DBPASS || "",
  dbname: process.env.DBNAME,
  dbport: process.env.DBPORT,
  secretKey: process.env.SECRETKEY,
  jwtkey: process.env.JWTKEY,
};

module.exports = gEnv;
