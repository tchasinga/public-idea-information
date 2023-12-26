import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      <h1>Jack dashaboad</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
