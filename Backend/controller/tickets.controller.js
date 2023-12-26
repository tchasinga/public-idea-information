const Ticket = require('../models/tickets.model.js');

// Create and Save a new Ticket
  const createTickets = async (req, res) => {
    try {
        const ticketsCreater = await Ticket.create(req.body);
        res.status(201).json({
          success: true,
          data: ticketsCreater,
          message: "Create ticketsCreater successfully",
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message || "Failed to create ticketsCreater table",
        });
      }
};

// Retrieve and return all tickets from the database.
  const findAllTickets = (req, res) => {
    Ticket.find()
        .then(tickets => {
            res.send(tickets);
        }).catch(err => {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving tickets."
            });
        });
};

// Find a single ticket with a ticketId



// adding an export method
module.exports = { createTickets, findAllTickets };