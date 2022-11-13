const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const createClient = async (req=request, resp=response) => {
    const query = 'INSERT INTO cliente(cliente_nombre, accountcode, login_user, login_pass, sip_host, sip_config, valor_movil, valor_fijo, proveedor_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;'
    const values = Object.values(req.body);

    try {
        const result = await dbpg.query(query, values);

        if( result.rowCount === 0 ){
            return resp.status(400).json({ error: "Error en el insertado de datos"});
        }

        resp.json(result.rows[0]);
        
    } catch (error) {
        throw new Error("Error en la query para crear cliente ", error);
    }
}

module.exports = createClient;