import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'

type Token = { text: string; kind: 'key' | 'str' | 'punct' }

const CODE_LINES: Token[][] = [
  [
    { text: 'const', kind: 'punct' },
    { text: ' developer', kind: 'key' },
    { text: ' = {', kind: 'punct' },
  ],
  [
    { text: '  nombre', kind: 'key' },
    { text: ': ', kind: 'punct' },
    { text: `'${profile.name}'`, kind: 'str' },
    { text: ',', kind: 'punct' },
  ],
  [
    { text: '  rol', kind: 'key' },
    { text: ': ', kind: 'punct' },
    { text: `'${profile.role}'`, kind: 'str' },
    { text: ',', kind: 'punct' },
  ],
  [
    { text: '  stack', kind: 'key' },
    { text: ": ['", kind: 'punct' },
    { text: 'TypeScript', kind: 'str' },
    { text: "', '", kind: 'punct' },
    { text: 'React', kind: 'str' },
    { text: "', '", kind: 'punct' },
    { text: 'Node.js', kind: 'str' },
    { text: "'],", kind: 'punct' },
  ],
  [
    { text: '  disponible', kind: 'key' },
    { text: ': ', kind: 'punct' },
    { text: 'true', kind: 'str' },
  ],
  [{ text: '};', kind: 'punct' }],
]

const KIND_CLASS: Record<Token['kind'], string> = {
  key: 'text-forest font-medium',
  str: 'text-emerald',
  punct: 'text-ink-muted',
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    const interval = setInterval(() => {
      setVisibleLines((n) => {
        if (n >= CODE_LINES.length) {
          clearInterval(interval)
          return n
        }
        return n + 1
      })
    }, 220)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-[68px]">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <div className="font-mono text-emerald text-sm mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald" />
            disponible para trabajo remoto
          </div>

          <h1 className="font-display font-bold leading-[1.05] text-[clamp(2.4rem,6vw,3.6rem)] mb-5 text-ink">
            Hola, soy
            <br />
            <span className="text-emerald">{profile.name}</span>
          </h1>

          <p className="text-ink-muted max-w-[480px] mb-8 text-[1.05rem]">
            {profile.heroTagline}
          </p>

          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#proyecto"
              className="font-mono text-sm px-6 py-3 rounded-md bg-emerald text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              Ver mi proyecto
            </a>
            <a
              href="#contacto"
              className="font-mono text-sm px-6 py-3 rounded-md border border-willow text-ink hover:border-emerald hover:text-emerald transition-all"
            >
              Contáctame
            </a>
          </div>
        </div>

        <div className="bg-cornsilk border border-willow/50 rounded-xl overflow-hidden shadow-[0_20px_50px_-25px_rgba(47,93,58,0.35)]">
          <div className="flex items-center gap-2 px-4 py-3 bg-vanilla/40 border-b border-willow/40">
            <span className="w-2.5 h-2.5 rounded-full bg-willow" />
            <span className="w-2.5 h-2.5 rounded-full bg-vanilla" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald" />
            <span className="ml-2 font-mono text-xs text-ink-muted">nikte.dev — perfil.ts</span>
          </div>
          <div className="p-6 font-mono text-[0.88rem] min-h-[260px]">
            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i}>
                {line.map((tok, j) => (
                  <span key={j} className={KIND_CLASS[tok.kind]}>
                    {tok.text}
                  </span>
                ))}
              </div>
            ))}
            {visibleLines >= CODE_LINES.length && <span className="cursor" />}
          </div>
        </div>
      </div>
    </section>
  )
}
