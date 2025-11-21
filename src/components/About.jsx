export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 ring-1 ring-white/5">
            <h3 className="text-xl font-semibold text-white">About Me</h3>
            <p className="mt-2 text-blue-200/80">
              I’m a student developer passionate about front-end engineering, UX, and creative coding. I love blending design and code to build playful, accessible experiences.
            </p>
            <p className="mt-2 text-blue-200/80">
              My current stack includes React, Tailwind, and FastAPI. I’m exploring 3D on the web with Spline.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 ring-1 ring-white/5">
            <h3 className="text-xl font-semibold text-white">Skills</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-blue-200/90 text-sm">
              {['HTML','CSS','JavaScript','React','Tailwind','FastAPI','MongoDB','Git'].map((s)=> (
                <li key={s} className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
