import { ShieldCheck, BadgeCheck, Clock, Recycle } from "lucide-react";

export default function Guarantees() {
  return (
    <section id="garantien" className="bg-emerald-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-900">Unser Qualitätsversprechen</h2>
          <p className="mt-4 text-emerald-900/80">Verlässlichkeit, saubere Arbeit und faire Preise – darauf können Sie sich verlassen. Wir arbeiten transparent, termintreu und mit Blick fürs Detail.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 font-semibold text-emerald-900">Festpreis & Termin</h3>
            <p className="mt-2 text-sm text-emerald-900/80">Verbindliche Angebote ohne versteckte Kosten. Termine werden eingehalten – versprochen.</p>
          </div>

          <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
            <BadgeCheck className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 font-semibold text-emerald-900">Saubere Übergabe</h3>
            <p className="mt-2 text-sm text-emerald-900/80">Wir hinterlassen alles ordentlich – von der Zufahrt bis zum letzten Grashalm.</p>
          </div>

          <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
            <Clock className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 font-semibold text-emerald-900">Schnelle Reaktion</h3>
            <p className="mt-2 text-sm text-emerald-900/80">Anfragen werden in der Regel innerhalb von 24 Stunden beantwortet.</p>
          </div>

          <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
            <Recycle className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 font-semibold text-emerald-900">Nachhaltig gedacht</h3>
            <p className="mt-2 text-sm text-emerald-900/80">Grünschnitt wird fachgerecht entsorgt oder verwertet – ressourcenschonend.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
