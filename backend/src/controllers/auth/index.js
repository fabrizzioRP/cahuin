const signUp = require("./signup.controller");
const signIn = require("./signin.controller");
const signOut = require("./signout.controller");
const currentUser = require("./current.controller");

module.exports = {
  signIn,
  signUp,
  signOut,
  currentUser,
};
