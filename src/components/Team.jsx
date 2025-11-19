import { Users, Award, Leaf } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-900">Ein Team mit Handschlagqualität</h2>
            <p className="mt-4 text-emerald-900/80">Wir sind gelernte Gärtner mit Erfahrung in Pflege, Gestaltung und Pflasterbau. Bei uns zählt das Ergebnis – und Ihr gutes Gefühl.</p>
            <ul className="mt-6 space-y-3 text-emerald-900/90">
              <li className="flex items-start gap-3"><Leaf className="h-5 w-5 mt-0.5 text-emerald-600" /><span>Ausgebildete Fachkräfte mit regionaler Expertise</span></li>
              <li className="flex items-start gap-3"><Users className="h-5 w-5 mt-0.5 text-emerald-600" /><span>Eigene Teams, keine anonymen Subunternehmer</span></li>
              <li className="flex items-start gap-3"><Award className="h-5 w-5 mt-0.5 text-emerald-600" /><span>Saubere, sorgfältige Ausführung – dokumentiert mit Vorher/Nachher</span></li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-100 rounded-2xl p-8">
            <div className="grid grid-cols-3 divide-x divide-emerald-200 text-center">
              <div className="px-4">
                <p className="text-3xl font-bold text-emerald-800">10+</p>
                <p className="text-sm text-emerald-900/70">Jahre Erfahrung</p>
              </div>
              <div className="px-4">
                <p className="text-3xl font-bold text-emerald-800">300+</p>
                <p className="text-sm text-emerald-900/70">Projekte</p>
              </div>
              <div className="px-4">
                <p className="text-3xl font-bold text-emerald-800">4.9★</p>
                <p className="text-sm text-emerald-900/70">Kundenzufriedenheit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
