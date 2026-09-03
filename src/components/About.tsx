import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="sobre-mi" className="py-28">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <div>
          <div className="font-mono text-emerald text-sm mb-2">// sobre mí</div>
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.4rem)] text-ink">
            ¿Quién soy?
          </h2>

          <div className="mt-5 space-y-4">
            {profile.aboutParagraphs.map((p, i) => (
              <p key={i} className="text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        </div>

        <ul className="flex flex-col gap-4 mt-2">
          {profile.aboutChecklist.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-[0.95rem] text-ink">
              <span className="shrink-0 w-6 h-6 rounded-md bg-emerald/15 text-forest flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
