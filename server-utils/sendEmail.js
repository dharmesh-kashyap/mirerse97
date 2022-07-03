
//const sendEmail = require('nodemailer-sendgrid');

//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
//sendinblue-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$ npm i nodemailer-sendinblue-v3-transport

const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
);

  await transporter.sendMail({
    from: `Mirerse ${process.env.SENDER_EMAIL}`,
    to: options.to,
    subject: options.subject,
    html: options.html,
  });
};

module.exports = sendEmail;
