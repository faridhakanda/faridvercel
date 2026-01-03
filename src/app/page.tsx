import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Farid Akanda</h1>
     <p>Hello there, I am a computer programmer and full stack developer interested with machine learning, cyber security and distributed system.</p>
    <Link href="about">About</Link>
    </main>
  );
}
