import React from 'react'
import TicketList from './TickectList'

export default function Tickets() {
    return (
        <main>
          <nav>
            <div>
              <h2>Tickets</h2>
              <p><small>Currently open tickets.</small></p>
            </div>
            {/* <Link href="/tickets/create" className="ml-auto">
              <button className="btn-primary">New Ticket</button>
            </Link> */}
          </nav>
            <TicketList />
        </main>
      )
}
