import {
  LayoutDashboard,
  FileText,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r bg-white flex flex-col">
      {/* Top Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b">
        <div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-md" />
        <span className="text-lg font-semibold">agency</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col px-3 py-4 gap-1 text-sm text-gray-600">
        <SidebarLink icon={LayoutDashboard} label="Boards" active />
        <SidebarLink icon={FileText} label="Pages" />
        <SidebarLink icon={Settings} label="Settings" />
      </nav>
    </aside>
  );
}

function SidebarLink({ icon: Icon, label, active = false }: { icon: any; label: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition ${
        active ? "bg-indigo-50 text-indigo-600 font-medium" : ""
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}
