import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyecto', href: '#proyecto' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-honeydew/85 backdrop-blur-md border-b border-willow/40">
      <nav className="max-w-[1100px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <div className="font-mono font-semibold text-lg tracking-wide text-ink">
          nikte<span className="text-emerald">.dev</span>
        </div>

        <div className="hidden md:flex gap-8 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-muted hover:text-emerald transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-2xl text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col bg-cornsilk border-b border-willow/40 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 border-t border-willow/30 text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
