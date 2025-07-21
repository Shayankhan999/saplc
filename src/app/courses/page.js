// app/courses/page.js
import CourseCard from '@/components/CourseCard';

// عارضی ڈیٹا (بعد میں API سے تبدیل کریں گے)
const courses = [
  {
    id: 1,
    title: "SAP FICO",
    duration: "6 week",
    instructor: "Ahmed Ali"
  },
  {
    id: 2,
    title: "SAP MM",
    duration: "4 week",
    instructor: "Sana Khan"
  }
];

export default function CoursesPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Our Courses</h1>
      <div className="grid gap-4">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}