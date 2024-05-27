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
    Ticket.find(req.query)
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
const  findOneTickect = async (req, res, next) => {
    try {
      const ticketsGet = await Ticket.findById(req.params.id);
      return res.status(200).json(ticketsGet);
    } catch (error) {
      next(error);
    }
 }

//  Delete one ticket by Id
const ticketsDelete = async (req, res, next) => {
  try {
    const ticketDelete = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticketDelete) {
      return res.status(404).send({
        success: false,
        message: "Ticket not found"
      });
    }
    return res.status(200).send({
      success: true,
      message: "Ticket deleted successfully"
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message || "Invalid Ticket request"
    });
    next(error);
  }
};


// adding an export method
module.exports = { createTickets, findAllTickets , findOneTickect , ticketsDelete};