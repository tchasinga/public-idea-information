const {createTickets , findAllTickets , findOneTickect , ticketsDelete} = require('../controller/tickets.controller.js');

const express = require('express');
const router = express.Router();

// Create a new Ticket
router.post('/creating', createTickets);
router.get('/all', findAllTickets);
router.get('/getId/:id', findOneTickect);
router.delete('/delete/:id', ticketsDelete);



module.exports = router;