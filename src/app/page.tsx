"use client";

const products = [
  {
    name: "Oversized Performance Tee",
    desc: "Cut loose. Hits hard. 100% merino.",
    tag: "01",
  },
  {
    name: "Cutoff Tank",
    desc: "Stripped back. Zero compromise.",
    tag: "02",
  },
  {
    name: '7" Training Shorts',
    desc: "Move without thinking. Built for rounds.",
    tag: "03",
  },
  {
    name: "Boxer Briefs",
    desc: "Foundation layer. Non-toxic to the core.",
    tag: "04",
  },
];

const materialPoints = [
  "Non-toxic — zero synthetic chemicals touching your skin",
  "Naturally antimicrobial — stays clean when you can't",
  "Temperature regulating — cold when it's hot, warm when it's not",
  "Built to last — outlasts every synthetic knockoff",
];

export default function Home() {
  return (
    <main className="bg-dark text-bone">
      {/* ── HERO ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.08)_0%,_transparent_70%)]" />
        <p className="relative mb-4 text-sm font-medium uppercase tracking-[0.4em] text-red">
          Against the grain
        </p>
        <h1 className="relative text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] tracking-tighter">
          SOUTH
          <br />
          PAW
        </h1>
        <p className="relative mt-6 max-w-md text-lg font-light tracking-wide text-bone/70 md:text-xl">
          Wrong hand. Right choice.
        </p>
        <a
          href="#waitlist"
          className="relative mt-10 border-2 border-red bg-red px-10 py-4 text-sm font-bold uppercase tracking-widest text-bone transition-all hover:bg-transparent hover:text-red"
        >
          Join the waitlist
        </a>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-10 w-px animate-pulse bg-bone/20" />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.5em] text-red">
          The stance
        </p>
        <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
          A southpaw doesn&rsquo;t fight like everyone else.
          <br />
          <span className="text-red">That&rsquo;s the point.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-bone/60 md:text-lg">
          In boxing, the southpaw wins because they reject the orthodox stance.
          Everyone else adjusts to them — never the other way around. We took
          the same approach to what touches your skin. While the industry wraps
          you in synthetic chemicals and calls it &ldquo;performance,&rdquo; we
          went the other way. Merino wool. Non-toxic. No&nbsp;compromise.
        </p>
        <div className="mx-auto mt-12 h-px w-24 bg-red" />
      </section>

      {/* ── PRODUCTS ── */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.5em] text-red">
            Coming soon
          </p>
          <h2 className="mb-20 text-center text-3xl font-black uppercase tracking-tight md:text-5xl">
            The lineup
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div
                key={p.tag}
                className="group relative flex aspect-[3/4] flex-col justify-between border border-bone/10 bg-gray p-6 transition-colors hover:border-red/50"
              >
                <span className="text-7xl font-black text-bone/5 transition-colors group-hover:text-red/10">
                  {p.tag}
                </span>
                <div>
                  <h3 className="text-lg font-black uppercase leading-tight tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-bone/50">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIAL STORY ── */}
      <section className="border-y border-bone/10 px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-red">
            The material
          </p>
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            We refuse
            <br />
            to compromise.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/60 md:text-lg">
            Every thread is merino wool. Not because it&rsquo;s trendy. Because
            nothing else meets our standard. No synthetic chemicals. No
            shortcuts. No bullshit.
          </p>
          <ul className="mt-12 space-y-4">
            {materialPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-l-2 border-red pl-4 text-sm text-bone/70 md:text-base"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section id="waitlist" className="px-6 py-32 text-center">
        <div className="mx-auto max-w-lg">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-red">
            Lead with your left
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Get in the ring.
          </h2>
          <p className="mt-4 text-bone/50">
            Drop your email. Be first to know when we launch.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 border border-bone/20 bg-transparent px-5 py-4 text-sm text-bone placeholder:text-bone/30 focus:border-red focus:outline-none"
            />
            <button
              type="submit"
              className="border-2 border-red bg-red px-8 py-4 text-sm font-bold uppercase tracking-widest text-bone transition-all hover:bg-transparent hover:text-red"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-bone/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-black tracking-tight">SOUTHPAW</p>
            <p className="mt-1 text-xs text-bone/40">Dubai, UAE</p>
          </div>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-bone/50">
            <a href="#" className="transition-colors hover:text-red">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-red">
              TikTok
            </a>
            <a href="#" className="transition-colors hover:text-red">
              X
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-[10px] text-bone/20">
          &copy; {new Date().getFullYear()} SOUTHPAW. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
