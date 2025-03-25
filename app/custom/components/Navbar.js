export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Customs Formula</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300 transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Settings</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  