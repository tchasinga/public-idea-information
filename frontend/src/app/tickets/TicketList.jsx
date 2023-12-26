import Link from "next/link";


async function getTickets() {
  const res = await fetch("http://localhost:5000/api/all", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache which means that refetch data
    },
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <Link href ={`/tickets/${ticket._id}`}>
          <div key={ticket._id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        </Link>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
}
