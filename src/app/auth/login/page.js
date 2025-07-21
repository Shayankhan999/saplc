// app/login/page.js
export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">LOGIN</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-1">EMAIL</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">PASSWORD</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}