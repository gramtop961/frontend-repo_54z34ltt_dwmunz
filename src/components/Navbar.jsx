import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow">
            GT
          </div>
          <span className="font-semibold text-gray-800">GreenteamMG</span>
          <span className="hidden sm:inline-block ml-3 text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Gartenbetrieb Mönchengladbach</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <button onClick={() => scrollTo('leistungen')} className="hover:text-emerald-700">Leistungen</button>
          <button onClick={() => scrollTo('ueber-uns')} className="hover:text-emerald-700">Über uns</button>
          <button onClick={() => scrollTo('referenzen')} className="hover:text-emerald-700">Referenzen</button>
          <button onClick={() => scrollTo('kontakt')} className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">Kontakt</button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menü">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-green-100 bg-white/90">
          <div className="px-4 py-3 flex flex-col gap-3">
            <button onClick={() => scrollTo('leistungen')} className="text-left">Leistungen</button>
            <button onClick={() => scrollTo('ueber-uns')} className="text-left">Über uns</button>
            <button onClick={() => scrollTo('referenzen')} className="text-left">Referenzen</button>
            <button onClick={() => scrollTo('kontakt')} className="text-left px-4 py-2 rounded-md bg-emerald-600 text-white">Kontakt</button>
          </div>
        </div>
      )}
    </header>
  );
}
