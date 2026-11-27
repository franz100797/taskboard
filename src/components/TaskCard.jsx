// src/components/TaskCard.jsx
function TaskCard({ title, done }) {
  return (
    <li
      className={`flex items-center gap-3 px-2 py-3 border-b border-gray-200 last:border-b-0 ${done ? "line-through text-gray-400" : ""}`}
    >
      <input type="checkbox" checked={done} readOnly />
      <span className="text-base">{title}</span>
      {done && (
        <span className="ml-auto text-xs text-green-600 bg-green-100px-2 py-0.5 rounded-full">
          erledigt
        </span>
      )}
    </li>
  );
}

export default TaskCard;
