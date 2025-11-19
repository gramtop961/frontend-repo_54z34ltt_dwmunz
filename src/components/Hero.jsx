export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-green-100" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-800 bg-white/70 border border-emerald-200 rounded-full px-3 py-1 text-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Regional in Mönchengladbach
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              GreenteamMG
              <span className="block text-emerald-700">Ihr Gartenbetrieb vor Ort</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Pflege, Gestaltung und nachhaltige Lösungen für Ihren Garten – zuverlässig, freundlich und fachgerecht.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#kontakt" className="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">Kostenlose Anfrage</a>
              <a href="#leistungen" className="px-5 py-3 rounded-md bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition">Leistungen ansehen</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200/60 to-transparent rounded-3xl blur-2xl" />
            <img alt="GreenteamMG Gärten" src="https://images.unsplash.com/photo-1738669313657-07ebf0f23d15?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmVlbnRlYW1NRyUyMEclQzMlQTRydGVufGVufDB8MHx8fDE3NjM1NjQ3NTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="relative rounded-2xl shadow-xl border border-emerald-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
