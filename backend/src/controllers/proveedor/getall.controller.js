const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const getAllProveedores = async (req=request, resp=response) => {
    try {
        const result = await dbpg.query("SELECT * FROM proveedor WHERE proveedor_activo=1");
        resp.json(result.rowCount === 0 ? [] : result.rows);
    } catch (error) {
        throw new Error("Error en la query para traer a los proveedores ", error)
    }
}

module.exports = getAllProveedores;