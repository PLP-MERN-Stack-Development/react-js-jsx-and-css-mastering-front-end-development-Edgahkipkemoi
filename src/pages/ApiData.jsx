import { useState, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { Search, User, Mail, Phone, Globe, ChevronLeft, ChevronRight } from "lucide-react";

export default function ApiData() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("users");
  const itemsPerPage = 6;

  // Fetch users from JSONPlaceholder
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts from JSONPlaceholder
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "users") {
      fetchUsers();
    } else {
      fetchPosts();
    }
  }, [activeTab]);

  // Filter data based on search term
  const filteredData = activeTab === "users"
    ? users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleRetry = () => {
    if (activeTab === "users") {
      fetchUsers();
    } else {
      fetchPosts();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-lg text-gray-600 dark:text-gray-400">Loading data...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">Error Loading Data</h2>
          <p className="text-red-600 dark:text-red-300 mb-4">{error}</p>
          <Button variant="danger" onClick={handleRetry}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          API Data Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fetching and displaying data from JSONPlaceholder API
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <Button
            variant={activeTab === "users" ? "primary" : "secondary"}
            onClick={() => handleTabChange("users")}
            className="mr-1"
          >
            <User className="w-4 h-4 mr-2" />
            Users ({users.length})
          </Button>
          <Button
            variant={activeTab === "posts" ? "primary" : "secondary"}
            onClick={() => handleTabChange("posts")}
          >
            📝 Posts ({posts.length})
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Results Info */}
      <div className="text-center mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {paginatedData.length} of {filteredData.length} {activeTab}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Data Grid */}
      {paginatedData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {searchTerm ? `No ${activeTab} found matching "${searchTerm}"` : `No ${activeTab} available`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activeTab === "users"
            ? paginatedData.map((user) => (
              <Card
                key={user.id}
                title={user.name}
                description={`@${user.username}`}
                icon={<User className="w-8 h-8" />}
                variant="default"
              >
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    {user.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    {user.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Globe className="w-4 h-4 mr-2" />
                    {user.website}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Company:</strong> {user.company.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>City:</strong> {user.address.city}
                    </p>
                  </div>
                </div>
              </Card>
            ))
            : paginatedData.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                description={post.body.substring(0, 100) + "..."}
                icon={<span className="text-2xl">📝</span>}
                variant="default"
              >
                <div className="text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Post ID: {post.id} | User ID: {post.userId}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert(`Full post:\n\n${post.body}`)}
                  >
                    Read More
                  </Button>
                </div>
              </Card>
            ))
          }
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* API Info */}
      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-300">
          API Information
        </h3>
        <p className="text-blue-700 dark:text-blue-400 text-sm">
          Data fetched from <strong>JSONPlaceholder</strong> - a fake REST API for testing and prototyping.
          This demonstrates real API integration with loading states, error handling, search functionality, and pagination.
        </p>
      </div>
    </div>
  );
}
