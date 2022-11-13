const { Router } = require("express");
const { body } = require("express-validator");
//
const {
  signIn,
  signUp,
  currentUser,
  signOut,
} = require("../controllers/auth/index");
const checkFields = require("../middlewares/checkfields");
const checkSessionToken = require("../middlewares/checksession");

const router = Router();

const path = {
  signin: "/auth/signin",
  signup: "/auth/signup",
  signout: "/auth/signout",
  actuser: "/auth/currentuser",
};

router.post(
  path.signin,
  [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("You must supply a username"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
    body("password")
      .isLength({ min: 8, max: 10 })
      .withMessage("Invalid character numbers of password"),
    checkFields,
  ],
  signIn
);

// TODO: verificar si eres admin
router.post(
  path.signup,
  [
    body("accountcode")
      .trim()
      .notEmpty()
      .withMessage("You must supply a accountcode"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("You must supply a username"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
    body("password")
      .isLength({ min: 8, max: 10 })
      .withMessage("Invalid character numbers of password"),
    checkFields,
  ],
  signUp
);

router.get(path.actuser, checkSessionToken, currentUser);

router.post(path.signout, signOut);

module.exports = router;
