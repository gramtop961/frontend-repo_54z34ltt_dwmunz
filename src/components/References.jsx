const refs = [
  {
    title: "Familie K., Rheydt",
    text: "Top Arbeit! Unser Garten sieht wieder gepflegt aus. Schnelle und saubere Ausführung.",
  },
  {
    title: "Herr M., Eicken",
    text: "Neue Terrasse und Beete – sehr zufrieden. Beratung war transparent und freundlich.",
  },
  {
    title: "Frau S., Wickrath",
    text: "Regelmäßige Gartenpflege seit einem Jahr. Zuverlässig und pünktlich.",
  },
];

export default function References() {
  return (
    <section id="referenzen" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Kundenstimmen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {refs.map((r) => (
            <div key={r.title} className="rounded-xl border border-emerald-200 p-6 bg-white shadow-sm">
              <p className="text-gray-700">“{r.text}”</p>
              <p className="mt-3 text-sm text-emerald-700 font-medium">{r.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
