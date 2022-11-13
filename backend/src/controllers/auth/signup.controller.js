const bcrypt = require("bcryptjs");
const { request, response } = require("express");
//
const dbpg = require("../../database/connect");

const signUp = async (req = request, resp = response) => {
  const { accountcode, username, password } = req.body;

  const client = await dbpg.query(
    `SELECT * FROM cliente WHERE accountcode = '${accountcode}' and cliente_activo = 1 and login_pass IS NULL;`
  );

  if (client.rowCount === 0) {
    return resp.status(401).json({ error: "Invalid Credentials" });
  }

  const data = { username };

  const salt = bcrypt.genSaltSync(10);
  const encrypPass = bcrypt.hashSync(password, salt);
  data.password = encrypPass;

  try {
    const query = `UPDATE cliente SET login_user=$1, login_pass=$2 WHERE accountcode = '${accountcode}' RETURNING *;`;
    const values = Object.values(data);

    const updateClient = await dbpg.query(query, values);

    if (updateClient.rowCount === 0) {
      return resp.status(401).json({ error: "Invalid Credentials" });
    }

    resp.status(200).json({ success: "true" });
  } catch (error) {
    throw new Error("Error Credentials ", error);
  }
};

module.exports = signUp;
