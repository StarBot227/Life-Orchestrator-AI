export default function PlanPage() {
  return (
    <div className="flex h-screen bg-neutral-900 text-white font-sans">
      <div className="w-64 border-r border-neutral-800 p-6">Backlog</div>
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-10">Daily Timeline</h1>
        <div className="relative border-l-2 border-neutral-700 ml-10">
          {Array.from({length: 24}).map((_, i) => (
            <div key={i} className="mb-10 ml-6 relative">
              <span className="absolute -left-16 text-neutral-500 font-mono">{i}:00</span>
              <div className="h-20 bg-neutral-800 rounded-lg p-4 border border-neutral-700">Available Slot</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
