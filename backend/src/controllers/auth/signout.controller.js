const { request, response } = require("express");

const signOut = (req = request, resp = response) => {
  req.session = null;
  resp.send({});
};

module.exports = signOut;
