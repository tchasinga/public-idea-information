const Ticket = require('../models/tickets.model.js');

// Create and Save a new Ticket
  const createTickets = (req, res) => {
    // Validate request
    if (!req.body.title || !req.body.body || !req.body.priority || !req.body.user_email) {
        return res.status(400).send({
            message: "Ticket content can not be empty"
        });
    }

    // Create a Ticket
    const ticket = new Ticket({
        title: req.body.title,
        body: req.body.body,
        priority: req.body.priority,
        user_email: req.body.user_email
    });

    // Save Ticket in the database
    ticket.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while creating the Ticket."
            });
        });
};

// Retrieve and return all tickets from the database.
exports.findAllTickets = (req, res) => {
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