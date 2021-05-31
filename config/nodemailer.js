const nodemailer = require('nodemailer');

const mailMan = (mailSubject, mailMessage) => {
  // Creating reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info@qenvie.com', // User
      pass: 'Qu@ntum1##', // Password
    },
    // tls: {
    //   rejectUnauthorized: false, // Allows you to send emails from a localhost.
    // },
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    from: '"PVH Website" <info@qenvie.com>', // sender
    // to: 'pleasantviewhotel123@gmail.com',
    to: 'georgeomara8@gmail.com',
    subject: mailSubject, // Subject line
    html: mailMessage, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    return;
  });
};

module.exports = mailMan;
