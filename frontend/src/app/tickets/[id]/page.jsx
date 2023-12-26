async function getTicket(id) {
    try {
      const res = await fetch(`http://localhost:5000/api/getId/$`, {
        next: {
          revalidate: 0
        }
      });
  

      return res.json();
    } catch (error) {
      console.error('Error fetching ticket:', error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }
  
  
  export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id);
  
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
          <p>ID: {ticket._id}</p> {/* Accessing the _id property */}
        </div>
      </main>
    );
  }
  