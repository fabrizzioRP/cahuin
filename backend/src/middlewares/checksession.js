const { request, response } = require("express");
const { verify } = require("jsonwebtoken");
const gEnv = require("../env/global-config");

const checkSessionToken = (req = request, resp = response, next) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = verify(req.session.jwt, gEnv.jwtkey);

    req.actualUser = payload;
  } catch (error) {}

  next();
};

module.exports = checkSessionToken;
