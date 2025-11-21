import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-white/20 backdrop-blur">
            Tech • Interactive • Playful • Modern
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-blue-100/90">
            A student developer crafting delightful web experiences with a focus on clean code, accessibility, and motion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition">View Projects</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
