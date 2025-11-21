import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(59,130,246,0.15),transparent_60%)]" />

      <Navbar />
      <main className="relative pt-24">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center">
        <p className="text-sm text-blue-200/70">© {new Date().getFullYear()} Your Name · Built with React, Tailwind & Spline</p>
      </footer>
    </div>
  )
}

export default App
