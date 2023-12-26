import Link from "next/link";

export default function Navbars() {
  return (
    <nav className="">
      <Link href="/">
        <h1>jack navigation</h1>
      </Link>
      <Link href="/tickets">
        <h1>Tickets</h1>
      </Link>
    </nav>
  );
}
