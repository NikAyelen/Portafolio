import { profile } from '../data/profile'

export default function Skills() {
  return (
    <section id="habilidades" className="py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-emerald text-sm mb-2">// stack</div>
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.4rem)] text-ink">
            Habilidades
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {profile.skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/70 border border-willow/40 rounded-xl p-6"
            >
              <h3 className="font-mono text-forest text-sm uppercase tracking-wide mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/30 text-forest"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
