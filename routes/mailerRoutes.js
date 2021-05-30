const express = require('express');
const router = express.Router();

const { sendMessage, bookRooms } = require('../controllers/mailerController');

// @desc    Send Email Message
// @route   post /mailer/message
router.post('/message', sendMessage);

// @desc    Book Hotel Rooms
// @route   post /mailer/book
router.post('/book', bookRooms);

module.exports = router;
