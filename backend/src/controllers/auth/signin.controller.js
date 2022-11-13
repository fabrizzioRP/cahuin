const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { request, response } = require("express");
//
const dbpg = require("../../database/connect");
const gEnv = require("../../env/global-config");

// TODO: add try catch
const signIn = async (req=request, resp=response) => {
    const { username, password } = req.body;

    const client = await dbpg.query(`SELECT * FROM cliente WHERE login_user = '${username}' and cliente_activo=1;`);

    if( client.rowCount === 0 ){
        return resp.status(401).json({ error: "Invalid Credentials"});
    }

    const matchPass = bcrypt.compareSync(password, client.rows[0].login_pass);
    if(!matchPass){
        return resp.status(401).json({ error: "Invalid Credentials"});
    }

    const token = sign({
        id: client.rows[0].cliente_id,
        nombre: client.rows[0].cliente_nombre,
        rol: client.rows[0].rol,
    }, gEnv.jwtkey);

    req.session = { jwt: token };

    resp.status(200).json({ success: "true" });
}

module.exports = signIn;