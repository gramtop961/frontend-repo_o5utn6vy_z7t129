import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus('Sending...');
    // In a future iteration, wire this to a backend
    await new Promise(r => setTimeout(r, 800));
    setStatus('Thanks! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Get in touch</h2>
          <p className="mt-1 text-blue-200/80">Have a question or want to work together?</p>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 ring-1 ring-white/5">
          <div className="grid gap-4">
            <input name="name" required placeholder="Your name" className="rounded-lg bg-white/5 px-4 py-2 text-white placeholder:text-blue-200/60 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="email" type="email" required placeholder="Email" className="rounded-lg bg-white/5 px-4 py-2 text-white placeholder:text-blue-200/60 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" required rows="4" placeholder="Message" className="rounded-lg bg-white/5 px-4 py-2 text-white placeholder:text-blue-200/60 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button className="inline-flex items-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:shadow-lg transition">Send</button>
            <span className="text-sm text-blue-200/80">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
