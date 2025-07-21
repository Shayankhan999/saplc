// app/courses/[id]/page.js
export default function CourseDetail({ params }) {
  // عارضی ڈیٹا
  const course = {
    id: params.id,
    title: "SAP FICO",
    description: "SAPLC",
    duration: "6 Week",
    price: "15,000 PKR"
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="mt-4">{course.description}</p>
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Fees:</strong> {course.price}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
       Admission
        </button>
      </div>
    </div>
  );
}