const { fetchFatturas, fetchFatturaDetails } = require("../model");
const getFatturas = async (req, res, next) => {
  try {
    const fatturas = await fetchFatturas(req.userId);
    if (!fatturas.length) {
      return res.status(404).json("No fatturas found");
    }
    return res.status(200).json(fatturas);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getFatturaDetails = async (req, res, next) => {
  try {
    const fatturaDetails = await fetchFatturaDetails(req.params.fatturaId);
    if (fatturaDetails) {
      return res.status(200).json(fatturaDetails);
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = { getFatturas, getFatturaDetails };
