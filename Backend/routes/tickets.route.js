const {createTickets , findAllTickets} = require('../controller/tickets.controller.js');

const express = require('express');
const router = express.Router();

// Create a new Ticket
router.post('/creating', createTickets);
router.get('/all', findAllTickets);

module.exports = router;