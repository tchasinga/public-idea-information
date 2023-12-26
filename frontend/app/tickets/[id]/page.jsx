import { notFound } from "next/navigation"



async function getTicket(id) {
  const res = await fetch(`http://localhost:5000/api/getId/${id}`, {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}


export default async function TicketDetails({ params }) {
  // const id = params.id
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}