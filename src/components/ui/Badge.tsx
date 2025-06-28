export function Badge({ children, className = "", variant = "default" }) {
  const base = "inline-block text-xs font-medium px-2 py-0.5 rounded-full";
  const variants = {
    default: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-600",
    danger: "bg-red-100 text-red-600",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
