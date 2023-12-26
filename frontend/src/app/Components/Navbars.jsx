import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
      <h1>Jack dashaboad</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  );
}
