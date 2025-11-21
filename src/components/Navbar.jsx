import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const NavLinks = () => (
    <>
      <button onClick={() => scrollTo("home")} className="px-4 py-2 text-slate-200 hover:text-white">Home</button>
      <button onClick={() => scrollTo("projects")} className="px-4 py-2 text-slate-200 hover:text-white">Projects</button>
      <button onClick={() => scrollTo("about")} className="px-4 py-2 text-slate-200 hover:text-white">About</button>
      <button onClick={() => scrollTo("contact")} className="px-4 py-2 text-slate-200 hover:text-white">Contact</button>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow shadow-blue-500/30"></div>
              <span className="text-lg font-semibold text-white">My Portfolio</span>
            </div>
            <nav className="hidden md:flex items-center">
              <NavLinks />
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="ml-4 inline-flex items-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg transition-shadow">Hire me</a>
            </nav>
            <button className="md:hidden text-white" aria-label="Menu" onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col rounded-xl border border-white/10 bg-slate-800/60">
                <NavLinks />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
