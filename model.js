const connection = require('./db')
require("dotenv").config();
const { nanoid } = require("nanoid");


const findUser = async (username) => {
  const searchQuery = `SELECT id, nome, cod_fisc, cognome, indirizzo, citta, prov, piva, tel, email, custarea_username, custarea_pass FROM cliente WHERE custarea_username= "${username}"`;
  const [[user]] = await connection.query(searchQuery);
  return user || null;
};

const setTemporaryPass = async (id, newPassword = nanoid()) => {
  const searchQuery = `UPDATE cliente SET custarea_pass="${newPassword}" WHERE id=${id}`;
  await connection.query(searchQuery);
  return newPassword;
};

const setNewPass = async (oldPass, newPass) => {
  const searchQuery = `UPDATE cliente SET custarea_pass="${newPass}" WHERE custarea_pass='${oldPass}'`;
  await connection.query(searchQuery);
  return newPass;
};

const fetchFatturas = async (id) => {
  const query = `SELECT * from fattura WHERE id_cliente=${id}`;
  const [fatturas] = await connection.query(query);
  return fatturas;
}

const fetchFatturaDetails = async (id) => {
  const query = `SELECT * FROM fattura_dettaglio WHERE id_fattura=${id}`;
  const [[fatturaDetails]] = await connection.query(query);
  return fatturaDetails

}

module.exports = {findUser, setTemporaryPass, setNewPass, fetchFatturas, fetchFatturaDetails}
