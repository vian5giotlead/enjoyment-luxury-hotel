import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>首頁</div>
      <Link href="/login"> login </Link>
      <Link href="/aggregate"> aggregate </Link>
    </main>
  );
}
