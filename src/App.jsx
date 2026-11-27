// src/App.jsx
import TaskCard from "./components/TaskCard";

const tasks = [
  { id: 1, title: "Kaffee kaufen", done: false },
  { id: 2, title: "Abgabe vorbereiten", done: true },
  { id: 3, title: "Rechnung zahlen", done: false },
  { id: 4, title: "Zahnarzttermin ausmachen", done: false },
];

function App() {
  return (
    <main className="max-w-120 my-12 mx-auto p-6 bg-white rounded-xl shadow-sm">
      <h1 className="m-0 mb-5 text-3xl font-bold">TaskBoard</h1>

      <ul className="list-none m-0 p-0">
        {tasks.map((task) => (
          <TaskCard key={task.id} title={task.title} done={task.done} />
        ))}
      </ul>
    </main>
  );
}

export default App;
