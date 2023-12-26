import Link from 'next/link';

export default function pagesnotfund() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
        <Link href="/">
            <p>Go back home</p>
        </Link>
    </div>
  )

}