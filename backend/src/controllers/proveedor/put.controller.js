const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const putClient = async (req=request, resp=response) => {
    const { id } = req.params;

    const query = `UPDATE proveedor SET proveedor_nombre=$1, sip_host=$2, sip_config=$3, valor_fijo=$4, valor_movil=$5 WHERE proveedor_id=${id} and proveedor_activo=1 RETURNING *`;
    const values = Object.values(req.body);
    
    const result = await dbpg.query(query, values);
    
    if( result.rowCount === 0 ){
        return resp.status(400).json({ error: `Error al actualizar un cliente con un id ${id}`});
    }

    resp.json(result.rows[0]);
}

module.exports = putClient;