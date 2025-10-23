import { useTheme } from "../context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
        <Navbar />

        <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-xl font-bold">React Task Manager</h1>
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main className="flex-grow p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
