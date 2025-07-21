// components/CourseCard.js
import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold text-lg">{course.title}</h3>
      <p>Teacher: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <Link 
        href={`/courses/${course.id}`}
        className="inline-block mt-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        Details
      </Link>
    </div>
  );
}