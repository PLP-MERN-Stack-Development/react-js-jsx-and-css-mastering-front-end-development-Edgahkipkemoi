import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} React + Tailwind App. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/tasks" className="hover:text-white transition-colors">Tasks</Link>
            <Link to="/api" className="hover:text-white transition-colors">API</Link>
            <a href="https://github.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
