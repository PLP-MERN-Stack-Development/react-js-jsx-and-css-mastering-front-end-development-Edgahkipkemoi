import { useState } from "react";
import Button from "../components/Button";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskManager from "../components/TaskManager";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("All");
  const [newTask, setNewTask] = useState("");

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, {
      id: Date.now(),
      text: newTask,
      completed: false,
      createdAt: new Date().toISOString()
    }]);
    setNewTask("");
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Filtered list
  const filteredTasks =
    filter === "All"
      ? tasks
      : filter === "Active"
        ? tasks.filter((t) => !t.completed)
        : tasks.filter((t) => t.completed);

  const completedCount = tasks.filter(t => t.completed).length;
  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Task Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks efficiently with our task manager
        </p>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{tasks.length}</h3>
          <p className="text-blue-800 dark:text-blue-300">Total Tasks</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{activeCount}</h3>
          <p className="text-yellow-800 dark:text-yellow-300">Active Tasks</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">{completedCount}</h3>
          <p className="text-green-800 dark:text-green-300">Completed</p>
        </div>
      </div>

      {/* Task Input Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <form onSubmit={addTask} className="flex gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task..."
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button type="submit" variant="primary" size="lg">
            Add Task
          </Button>
        </form>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8">
        {["All", "Active", "Completed"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
            size="md"
          >
            {f} {f === "All" ? `(${tasks.length})` : f === "Active" ? `(${activeCount})` : `(${completedCount})`}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {filteredTasks.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {filter === "All" ? "No tasks yet. Add one above!" : `No ${filter.toLowerCase()} tasks.`}
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-grow">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <div className="flex-grow">
                      <span
                        className={`text-lg ${task.completed
                          ? "line-through text-gray-500 dark:text-gray-400"
                          : "text-gray-900 dark:text-white"
                          }`}
                      >
                        {task.text}
                      </span>
                      {task.createdAt && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Created: {new Date(task.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      
    </div>
  );
}
