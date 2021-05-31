const asyncHandler = require('express-async-handler');
const moment = require('moment');
const messageHTML = require('../templates/messageTemplate');
const bookingHTML = require('../templates/bookingTemplate');
const mailMan = require('../config/nodemailer');

// @desc    Send Email Message
// @route   post /mailer/message
const sendMessage = asyncHandler(async (req, res) => {
  const { name, phone, email, message } = req.body;
  const mailMessage = messageHTML(name, phone, email, message);

  mailMan(`New message from ${name}`, mailMessage);
});

// @desc    Book Hotel Rooms
// @route   post /mailer/book
const bookRooms = asyncHandler(async (req, res) => {
  const { name, email, rooms, guests, arrivalDate, departureDate, note } =
    req.body;

  // Format Dates
  const arrival = moment(arrivalDate).format('Do MMMM, YYYY');
  const departure = moment(departureDate).format('Do MMMM, YYYY');

  const mailMessage = bookingHTML(
    name,
    email,
    rooms,
    guests,
    arrival,
    departure,
    note
  );

  mailMan(`${name} wants to Book a Room`, mailMessage);
});

module.exports = {
  sendMessage,
  bookRooms,
};
