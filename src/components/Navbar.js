// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">SAPLC</Link>
        <div className="flex gap-4">
             <Link href="/about" className="hover:underline">About</Link>
             <Link href="/admin" className="hover:underline">Admin</Link>
              <Link href="/request" className="hover:underline">Admission Form</Link>
          <Link href="/courses" className="hover:underline">Courses</Link>
           <Link href="/feedback" className="hover:underline">Feedback</Link>
          <Link href="/auth/login" className="hover:underline">Login</Link>
         
        </div>
      </div>
    </nav>
  );
}