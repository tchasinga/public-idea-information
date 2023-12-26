import React from 'react'
async function getTickets() {
    const response = await fetch('http://localhost:5000/api/all')
    const data = await response.json()
    return data
  }

export default async function TicketList() {
    const tickets = await getTickets()
    return (
        <>
          {tickets.map((ticket) => (
            <div key={ticket._id} className="card my-5">
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </div>
          ))}
          {tickets.length === 0 && (
            <p className="text-center">There are no open tickets, yay!</p>
          )}
        </>
      )
}
