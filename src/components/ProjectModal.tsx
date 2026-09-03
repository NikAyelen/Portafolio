import { useEffect } from 'react'
import { profile } from '../data/profile'

interface Props {
  open: boolean
  onClose: () => void
}

export default function ProjectModal({ open, onClose }: Props) {
  const project = profile.featuredProject

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  // Siempre mostramos 4 casillas: las que ya tengan imagen en profile.ts
  // se rellenan, el resto queda como placeholder para que Nikte las complete.
  const slots = Array.from({ length: 4 }, (_, i) => project.gallery[i])

  return (
    <div
      className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[200] flex items-start justify-center p-5 pt-16 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-honeydew border border-willow/50 rounded-2xl max-w-[760px] w-full p-10 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-cornsilk border border-willow/50 w-8 h-8 rounded-lg text-lg text-ink"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <h3 className="font-display text-2xl mb-1 text-ink">{project.title}</h3>
        <div className="font-mono text-emerald text-sm mb-6">
          {project.tag} · Rol: diseño de arquitectura y backend
        </div>

        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wide text-ink-muted mb-2.5">
            Qué hice
          </h4>
          <ul className="text-ink-muted text-[0.95rem] list-disc pl-5 space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wide text-ink-muted mb-2.5">
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/30 text-forest"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-ink-muted mb-2.5">
            Capturas
          </h4>
          {/*
            ✏️ EDITA AQUÍ (en realidad: en src/data/profile.ts → featuredProject.gallery)
            Agrega tus capturas ahí, ej:
            { src: '/proyectos/beta-1.png', alt: 'Pantalla principal de BETA' }
            colocando el archivo de imagen dentro de /public/proyectos/
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {slots.map((img, i) =>
              img ? (
                <div
                  key={i}
                  className="gallery-slot aspect-[16/10] border border-willow/50 rounded-lg overflow-hidden"
                >
                  <img src={img.src} alt={img.alt} />
                </div>
              ) : (
                <div
                  key={i}
                  className="aspect-[16/10] border-[1.5px] border-dashed border-willow/60 rounded-lg flex items-center justify-center text-center text-ink-muted font-mono text-xs p-2.5"
                >
                  📷 Aquí va tu captura {i + 1}
                </div>
              ),
            )}
          </div>
        </div>

        {(project.repoUrl || project.liveUrl) && (
          <div className="mt-6 flex gap-3 flex-wrap">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2.5 rounded-md bg-emerald text-white font-semibold"
              >
                Ver repositorio
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2.5 rounded-md border border-willow text-ink"
              >
                Ver demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
