import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  Rocket,
  Zap,
  Smartphone,
  Code,
  Palette,
  Database,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Experience lightning-fast rendering with React 19 and Vite's optimized build process.",
      color: "yellow"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Reusable Components",
      description: "Modular and maintainable architecture using modern React components and hooks.",
      color: "blue"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Fully responsive layout that works seamlessly on mobile, tablet, and desktop.",
      color: "green"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Dark Mode Support",
      description: "Beautiful light and dark themes with smooth transitions and user preference persistence.",
      color: "purple"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Integration",
      description: "Real-time data fetching with loading states, error handling, and pagination.",
      color: "red"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Modern Stack",
      description: "Built with the latest technologies: React 19, Tailwind CSS 4, and Vite 7.",
      color: "indigo"
    }
  ];

  const stats = [
    { label: "Components", value: "10+", icon: <Code className="w-6 h-6" /> },
    { label: "Pages", value: "3", icon: <Smartphone className="w-6 h-6" /> },
    { label: "API Endpoints", value: "2", icon: <Database className="w-6 h-6" /> },
    { label: "Responsive", value: "100%", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`text-center py-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Rocket className="w-16 h-16 mx-auto text-blue-500 dark:text-blue-400 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
            React Task Manager
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            A modern, responsive web application built with React, Tailwind CSS, and cutting-edge development practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tasks">
              <Button variant="primary" size="lg" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/api">
              <Button variant="outline" size="lg">
                View API Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <div className="flex justify-center mb-3 text-blue-500 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need for modern web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <Card
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant="default"
                  className="h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our task management system and API integration features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tasks">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Try Task Manager
              </Button>
            </Link>
            <Link to="/api">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Explore API Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Built With Modern Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React 19", "Vite 7", "Tailwind CSS 4", "React Router",
              "Lucide Icons", "JSONPlaceholder API", "LocalStorage API"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
