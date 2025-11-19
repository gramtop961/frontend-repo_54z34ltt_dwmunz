const services = [
  {
    title: "Gartenpflege",
    desc: "Rasenmähen, Heckenschnitt, Beetpflege und saisonale Arbeiten – zuverlässig und sauber.",
    icon: "🌿",
  },
  {
    title: "Neugestaltung",
    desc: "Von der Idee bis zur Umsetzung: Rasenflächen, Beete, Wege und mehr.",
    icon: "🛠️",
  },
  {
    title: "Pflaster- & Wegebau",
    desc: "Terrassen, Einfahrten und Gartenwege – fachgerecht und langlebig.",
    icon: "🧱",
  },
  {
    title: "Baumpflege",
    desc: "Schnittarbeiten, Kronenpflege und Entsorgung – sicher und professionell.",
    icon: "🌳",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Leistungen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-emerald-200 p-6 bg-gradient-to-b from-emerald-50 to-white">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
