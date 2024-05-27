const mongoose = require('mongoose');
const ticketesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body : {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        // required: true,
    },
    },{timestamps: true});

const Ticket = mongoose.model('Ticket', ticketesSchema);
module.exports = Ticket;