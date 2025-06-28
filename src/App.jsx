import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskCard from "./components/TaskCard";
import SortableItem from "./components/SortableItem";

export default function App() {
 const [columns, setColumns] = useState({
  todo: [
    { id: "task-1", title: "Design landing page" },
    { id: "task-2", title: "Write user stories" },
  ],
  inProgress: [
    { id: "task-3", title: "Research smooth transitions" },
  ],
  done: [
    { id: "task-4", title: "Fix navbar bugs" },
  ],
});


  const sensors = useSensors(useSensor(PointerSensor));

 const handleDragEnd = ({ active, over }) => {
  if (!over || active.id === over.id) return;

  const fromColumn = findColumnOfItem(active.id);
  const toColumn = findColumnOfItem(over.id);

  if (!fromColumn || !toColumn) return;

  const fromTasks = [...columns[fromColumn]];
  const toTasks = [...columns[toColumn]];

  const task = fromTasks.find((t) => t.id === active.id);
  const updatedFrom = fromTasks.filter((t) => t.id !== active.id);

  // Drop to a different column
  const overIndex = toTasks.findIndex((t) => t.id === over.id);
  const updatedTo = [
    ...toTasks.slice(0, overIndex),
    task,
    ...toTasks.slice(overIndex),
  ];

  setColumns({
    ...columns,
    [fromColumn]: updatedFrom,
    [toColumn]: updatedTo,
  });
};

  const findColumnOfItem = (id) => {
  return Object.keys(columns).find((columnId) =>
    columns[columnId].some((task) => task.id === id)
  );
};


  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(columns).map(([key, items]) => (
                <div key={key} className="bg-white p-4 rounded-xl border shadow-sm">
                  <h2 className="text-lg font-semibold mb-4 capitalize">{key}</h2>
                  <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
                    <div className="space-y-4">
                      {items.map((task) => (
                        <SortableItem key={task.id} id={task.id}>
                          <TaskCard
                            title={task.title}
                            tags={task.tags}
                            members={["https://i.pravatar.cc/150?img=1"]}
                            date="Today"
                          />
                        </SortableItem>
                      ))}
                    </div>
                  </SortableContext>
                </div>
              ))}
            </div>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
