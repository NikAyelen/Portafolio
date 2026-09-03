import { profile } from '../data/profile'

interface Props {
  onOpen: () => void
}

export default function FeaturedProject({ onOpen }: Props) {
  const project = profile.featuredProject

  return (
    <section id="proyecto" className="py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-emerald text-sm mb-2">// proyecto destacado</div>
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.4rem)] text-ink">
            Lo que he construido
          </h2>
        </div>

        <button
          onClick={onOpen}
          className="w-full text-left bg-gradient-to-br from-cornsilk to-vanilla/40 border border-willow/50 rounded-2xl p-9 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center cursor-pointer hover:border-emerald hover:-translate-y-1 transition-all"
        >
          <div>
            <div className="font-mono text-forest text-xs mb-2">{project.tag}</div>
            <h3 className="font-display text-2xl mb-3 text-ink">{project.title}</h3>
            <p className="text-ink-muted max-w-[560px]">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/70 border border-willow/50 text-forest"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="font-mono text-sm text-forest border border-emerald rounded-lg px-5 py-3 whitespace-nowrap bg-white/60">
            Click para ver detalles →
          </div>
        </button>
      </div>
    </section>
  )
}
