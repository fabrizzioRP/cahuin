const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const createProveedor = async (req = request, resp = response) => {
  const { nombre, siphost, sipconfig, valorfijo, valormovil } = req.body;

  const query =
    "INSERT INTO proveedor(proveedor_nombre, sip_host, sip_config, valor_fijo, valor_movil) VALUES($1,$2,$3,$4,$5) RETURNING *;";
  const values = [nombre, siphost, sipconfig, valorfijo, valormovil];

  try {
    const result = await dbpg.query(query, values);

    if (result.rowCount === 0) {
      return resp.status(400).json({ error: "Error en el insertado de datos" });
    }

    resp.json(result.rows[0]);
  } catch (error) {
    throw new Error("Error en la query para crear proveedor ", error);
  }
};

module.exports = createProveedor;
