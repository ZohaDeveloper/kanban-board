import { Bell, Lock, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-3 border-b bg-white flex items-center justify-between shadow-sm">
      {/* Left: Logo and Title */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-md"></div>
        <span className="font-semibold text-xl">Kanban</span>
      </div>

      {/* Center: Search */}
      <div className="relative w-1/2 max-w-md hidden md:block">
        <Search className="absolute top-2.5 left-3 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Try searching tasks"
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          <Lock className="w-4 h-4" />
          Share
        </button>
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <User className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
    </nav>
  );
}
