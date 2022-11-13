const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const deleteClient = async (req=request, resp=response) => {
    const { id } = req.params;

    const query = `UPDATE cliente SET cliente_activo=0 WHERE cliente_id=${id} and cliente_activo=1 RETURNING *;`;
    const result = await dbpg.query(query);
    
    if( result.rowCount === 0 ){
        return resp.status(400).json({ error: `Error al desactivar el cliente con id ${id}`});
    }

    resp.json(result.rows[0]);
}

module.exports = deleteClient;