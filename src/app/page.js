// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4">
      
      
      <h1 className="text-3xl font-bold">SAPLC Training Center</h1>
      <p className="mt-2">Online Admission</p>
      
      <div className="mt-6">
        <Link 
          href="/courses"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Select Courses
        </Link>
      </div>
    </div>
  );
}