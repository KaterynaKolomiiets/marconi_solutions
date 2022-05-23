const express = require("express");
const router = express.Router();

const {
  getFatturas,
  getFatturaDetails,
} = require("../Controllers/fatturaControllers");

const auth = require("../middlewares/middlewares");

router.get("/", auth, getFatturas);
router.get("/:fatturaId", auth, getFatturaDetails);

module.exports = router;