import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 dark:bg-gray-950 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-white">My React App</h1>
      <div className="space-x-6">
        <Link
          to="/"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
        >
          Home
        </Link>
        <Link
          to="/tasks"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
        >
          Tasks
        </Link>
        <Link
          to="/api"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
        >
          API Data
        </Link>
      </div>
    </nav>
  );
}
