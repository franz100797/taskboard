// src/App.jsx
function App() {
  return (
    <main className="max-w-120 my-12 mx-auto p-6 bg-white rounded-xl shadow-sm">
      <h1 className="m-0 mb-5 text-3xl font-bold">TaskBoard</h1>

      <ul className="list-none m-0 p-0">
        <li className="flex items-center gap-3 px-2 py-3 border-b border-gray-200 last:border-b-0">
          <input type="checkbox" />
          <span className="text-base">Kaffee kaufen</span>
        </li>
        <li className="flex items-center gap-3 px-2 py-3 border-b border-gray-200 last:border-b-0">
          <input type="checkbox" />
          <span className="text-base">Abgabe vorbereiten</span>
        </li>
        <li className="flex items-center gap-3 px-2 py-3 border-b border-gray-200 last:border-b-0">
          <input type="checkbox" />
          <span className="text-base">Rechnung zahlen</span>
        </li>
      </ul>
    </main>
  );
}

export default App;
