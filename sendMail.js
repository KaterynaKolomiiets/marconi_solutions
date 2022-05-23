const { send } = require("express/lib/response");
const nodemailer = require("nodemailer");
require("dotenv").config();


const sendMail = async (newPassword, userEmail) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_SENDER_PASSWORD,
      },
    });

    let resetLink = `${process.env.CLIENT_URL}/change-password/${newPassword}`;

    await transporter.sendMail({
      from: `"Marconi solutions" <${process.env.EMAIL_SENDER}>`,
      to: "kateryna.kolomiiets.official@gmail.com", // CHANGE
      subject: "Change password",
      html: `<P>Hello! Here is your new password <a href=${resetLink}>new password</a> </P>`,
    });
    return newPassword;
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendMail;