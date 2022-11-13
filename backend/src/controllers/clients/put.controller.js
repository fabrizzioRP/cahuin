const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const putClient = async (req=request, resp=response) => {
    const { id } = req.params;

    const query = `UPDATE cliente SET cliente_nombre=$1, accountcode=$2, login_user=$3, login_pass=$4, sip_host=$5, sip_config=$6, valor_movil=$7, valor_fijo=$8, proveedor_id=$9 WHERE cliente_id=${id} and cliente_activo=1 RETURNING *;`;
    const values = Object.values(req.body);

    const result = await dbpg.query(query, values);
    
    if( result.rowCount === 0 ){
        return resp.status(400).json({ error: `Error al actualizar el cliente con id ${id}`});
    }

    resp.json(result.rows[0]);
}

module.exports = putClient;