import Link from "next/link";
export default function CarsList() {
  return (
    <>
      <h1>Cars List</h1>
      <Link href="/cars/tesla">Tesla</Link>
      <Link href="/cars/lambo">Lambo</Link>
    </>
  );
}
