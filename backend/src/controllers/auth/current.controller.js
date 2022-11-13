const { request, response } = require("express");

const currentUser = (req = request, resp = response) => {
  if (!req.actualUser) {
    return resp.status(401).json({ error: "Not Authorized" });
  }

  resp.json({ currentUser: req.actualUser || null });
};

module.exports = currentUser;
