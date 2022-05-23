const express = require("express");
const router = express.Router();

const {
  login,
  logout,
  refresh,
  resetPassword,
  changePassword,
} = require("../Controllers/userControllers");

const auth = require("../middlewares/middlewares");

// user routes
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/refresh", auth, refresh);
router.patch("/reset", resetPassword);
router.post("/change-password/:link", changePassword);


module.exports = router;
