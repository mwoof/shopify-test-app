import Link from "next/link";

export default function EnterPage({}) {
  return (
    <main>
      <h1>Test</h1>
      <Link href="/">
        <button>Back to home</button>
      </Link>
    </main>
  );
}
