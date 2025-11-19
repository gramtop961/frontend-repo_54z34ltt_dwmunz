export default function About() {
  return (
    <section id="ueber-uns" className="py-16 bg-emerald-50 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Über GreenteamMG</h2>
          <p className="text-gray-700 leading-relaxed">
            Wir sind ein regionaler Gartenbetrieb aus Mönchengladbach. Unser Anspruch: saubere Arbeit,
            faire Preise und ein freundlicher Service. Ob kleine Gartenpflege oder komplette Neugestaltung –
            wir beraten Sie ehrlich und setzen Projekte zuverlässig um.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>• Persönliche Beratung vor Ort</li>
            <li>• Nachhaltige Materialien und Pflanzen</li>
            <li>• Termin- und Budgettreue</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 bg-emerald-200/40 rounded-2xl blur-xl" />
          <img alt="Team bei der Gartenarbeit" src="https://images.unsplash.com/photo-1676288005514-838624ec6690?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWFtJTIwYmVpJTIwZGVyJTIwR2FydGVuYXJiZWl0fGVufDB8MHx8fDE3NjM1NjQ3NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="relative rounded-2xl shadow-lg border border-emerald-200" />
        </div>
      </div>
    </section>
  );
}
