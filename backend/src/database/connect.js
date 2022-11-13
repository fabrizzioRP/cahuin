const { Pool } = require("pg");
const gEnv = require("../env/global-config");

const connectPg = () => {
  try {
    const pool = new Pool({
      host: gEnv.dbhost,
      user: gEnv.dbuser,
      password: gEnv.dbpass,
      database: gEnv.dbname,
      port: gEnv.dbport,
    });

    pool.query("SELECT NOW()::date;", (err, res) => {
      if (err) {
        console.log(err);
        throw new Error("Error con la conexion");
      }

      console.log("Conectado a la base de datos correctamente!");
      console.log("Fecha de conexión: ", res.rows[0].now);
    });

    return pool;
  } catch (error) {
    throw new Error("Error", error);
  }
};

const dbpg = connectPg();

module.exports = dbpg;
