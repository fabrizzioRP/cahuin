const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const getClient = async (req=request, resp=response) => {
    const { id } = req.params;
    try {
        const query = `SELECT c.cliente_id, c.cliente_nombre, c.accountcode, c.login_user, c.login_pass, c.sip_host, c.sip_config, c.valor_movil, c.valor_fijo, c.proveedor_id, p.proveedor_nombre, c.rol FROM cliente c JOIN proveedor p ON p.proveedor_id=c.proveedor_id WHERE c.cliente_id = ${id} and c.cliente_activo=1;`;
        const result = await dbpg.query(query);
        resp.json(result.rowCount === 0 ? [] : result.rows);
    } catch (error) {
        throw new Error("Error en la query para traer un cliente ", error)
    }
}

module.exports = getClient;