import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import References from './components/References'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <References />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} GreenteamMG – Gartenbetrieb Mönchengladbach</p>
          <div className="flex gap-4">
            <a href="#leistungen" className="hover:text-emerald-700">Leistungen</a>
            <a href="#ueber-uns" className="hover:text-emerald-700">Über uns</a>
            <a href="#kontakt" className="hover:text-emerald-700">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App