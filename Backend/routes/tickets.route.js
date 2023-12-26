const {createTickets , findAllTickets , findOneTickect} = require('../controller/tickets.controller.js');

const express = require('express');
const router = express.Router();

// Create a new Ticket
router.post('/creating', createTickets);
router.get('/all', findAllTickets);
// Corrected route definition
router.get('/getId/:id', findOneTickect);


module.exports = router;