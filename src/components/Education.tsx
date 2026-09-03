import { profile } from '../data/profile'

export default function Education() {
  return (
    <section id="educacion" className="py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-emerald text-sm mb-2">// formación</div>
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.4rem)] text-ink">
            Educación y Certificaciones
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {profile.education.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 border border-willow/40 rounded-xl px-8 py-7 flex justify-between items-center gap-5 flex-wrap"
            >
              <div>
                <h3 className="font-display text-lg mb-1 text-ink">{item.title}</h3>
                <p className="text-ink-muted text-sm">{item.institution}</p>
              </div>
              {item.years && (
                <div className="font-mono text-emerald text-sm">{item.years}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
