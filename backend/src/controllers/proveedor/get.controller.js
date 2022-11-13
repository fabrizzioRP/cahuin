const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const getProveedor = async (req=request, resp=response) => {
    const { id } = req.params;
    try {
        const result = await dbpg.query(`SELECT * FROM proveedor WHERE proveedor_id=${id} and proveedor_activo=1`);
        resp.json( result.rowCount === 0 ? [] : result.rows);
    } catch (error) {
        throw new Error("Error en la query para traer un proveedor ", error)
    }
}

module.exports = getProveedor;