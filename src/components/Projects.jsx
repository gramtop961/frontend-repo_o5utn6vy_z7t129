const projects = [
  {
    title: "Motion Portfolio",
    description: "A modern portfolio with smooth animations and 3D integration.",
    tags: ["React", "Framer Motion", "Spline"],
    link: "#"
  },
  {
    title: "Campus Club Hub",
    description: "Directory for student clubs with events and chat.",
    tags: ["FastAPI", "MongoDB", "Tailwind"],
    link: "#"
  },
  {
    title: "Study Planner",
    description: "Time-blocking planner with Pomodoro and progress insights.",
    tags: ["React", "LocalStorage"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(600px_circle_at_80%_80%,rgba(14,165,233,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-blue-200/80">A selection of things I’ve built recently</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition shadow-md hover:shadow-xl hover:shadow-blue-500/10">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10 mb-4 group-hover:from-blue-900/30 group-hover:to-slate-900" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-blue-200/80">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-blue-200 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
