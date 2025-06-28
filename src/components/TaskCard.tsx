import { Badge } from "./ui/Badge";
import { CalendarDays } from "lucide-react";

export default function TaskCard({
  title,
  tags,
  members,
  date,
}: {
  title: string;
  tags?: string[];
  members?: string[]; // URLs to avatars
  date?: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      {/* Tags */}
      <div className="flex gap-2 mb-2 flex-wrap">
        {tags?.map((tag, i) => (
          <Badge
            key={i}
            className="text-xs font-medium border-dashed"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold mb-4 leading-snug text-gray-800">
        {title}
      </h3>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {members?.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`avatar-${i}`}
              className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
            />
          ))}
        </div>

        {/* Date */}
        {date && (
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <CalendarDays className="w-3.5 h-3.5" />
            {date}
          </div>
        )}
      </div>
    </div>
  );
}
