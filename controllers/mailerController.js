const asyncHandler = require('express-async-handler');
const moment = require('moment');

// @desc    Send Email Message
// @route   post /mailer/message
const sendMessage = asyncHandler(async (req, res) => {
  const { name, phone, email, message } = req.body;
  console.log({ name, phone, email, message });
});

// @desc    Book Hotel Rooms
// @route   post /mailer/book
const bookRooms = asyncHandler(async (req, res) => {
  const { name, email, rooms, guests, arrival, departure, message } = req.body;
  console.log({ name, email, rooms, guests, arrival, departure, message });
});

module.exports = {
  sendMessage,
  bookRooms,
};
