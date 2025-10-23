export default function Card({
  title,
  description,
  icon,
  children,
  className = "",
  variant = "default"
}) {
  const baseClasses = "rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1";

  const variants = {
    default: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    primary: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800",
    secondary: "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {icon && (
        <div className="text-blue-500 dark:text-blue-400 mb-3 flex justify-center">
          {icon}
        </div>
      )}
      {title && (
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
