import { Phone, ClipboardList, Hammer, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    { icon: Phone, title: "1. Anfrage & Beratung", text: "Sie melden sich per Telefon oder Formular. Wir klären Ihr Anliegen und vereinbaren einen Termin vor Ort." },
    { icon: ClipboardList, title: "2. Vor-Ort-Termin", text: "Wir besichtigen Ihre Fläche, beraten zu Möglichkeiten und erstellen ein transparentes Festpreisangebot." },
    { icon: Hammer, title: "3. Umsetzung", text: "Unser Team arbeitet sauber, termingerecht und in enger Abstimmung – mit klaren Ansprechpartnern." },
    { icon: CheckCircle2, title: "4. Abnahme & Pflege", text: "Gemeinsame Abnahme, saubere Übergabe und auf Wunsch weitere Pflegeintervalle." },
  ];

  return (
    <section id="ablauf" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-900">So arbeiten wir zusammen</h2>
          <p className="mt-4 text-emerald-900/80">Transparente Schritte, klare Zuständigkeiten und kurze Wege. Von der Erstberatung bis zur sauberen Übergabe.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-emerald-50/50 rounded-xl border border-emerald-100 p-6">
              <Icon className="h-8 w-8 text-emerald-600" />
              <h3 className="mt-4 font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-sm text-emerald-900/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
