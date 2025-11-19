import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-16 bg-emerald-50 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontakt & Anfrage</h2>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl border border-emerald-200 p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input required name="name" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-Mail</label>
                  <input required type="email" name="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefon</label>
                  <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Leistung</label>
                  <select name="service" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500">
                    <option>Gartenpflege</option>
                    <option>Neugestaltung</option>
                    <option>Pflaster- & Wegebau</option>
                    <option>Baumpflege</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Betreff</label>
                <input name="subject" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nachricht</label>
                <textarea required name="message" rows="5" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <button className="w-full sm:w-auto px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">
                Senden
              </button>
              {status === "ok" && (
                <p className="text-emerald-700 text-sm">Danke! Wir melden uns zeitnah.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">Etwas ist schiefgelaufen. Bitte später erneut versuchen.</p>
              )}
            </form>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl bg-white border border-emerald-200 p-6">
              <h3 className="font-semibold text-gray-900">Adresse</h3>
              <p className="text-gray-700">Mönchengladbach und Umgebung</p>
            </div>
            <div className="rounded-xl bg-white border border-emerald-200 p-6">
              <h3 className="font-semibold text-gray-900">Kontakt</h3>
              <p className="text-gray-700">E-Mail: info@greenteammg.de</p>
              <p className="text-gray-700">Telefon: 02161 000000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
