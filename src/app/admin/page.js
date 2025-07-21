// app/admin/page.js
export default function AdminDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6"> AdminDashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h3 className="font-bold">Courses</h3>
          <p>Complete Courses</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-bold">Students</h3>
          <p>Registered Student</p>
        </div>
      </div>
    </div>
  );
}