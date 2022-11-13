const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const deleteProveedor = async (req=request, resp=response) => {
    const { id } = req.params;

    const query = `UPDATE proveedor SET proveedor_activo=0 WHERE proveedor_id=${id} and proveedor_activo=1 RETURNING *;`;
    const result = await dbpg.query(query);
    
    if( result.rowCount === 0 ){
        return resp.status(400).json({ error: `Error al desactivar el proveedor con id ${id}`});
    }

    resp.json(result.rows[0]);
}

module.exports = deleteProveedor;