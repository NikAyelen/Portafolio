import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-forest text-honeydew pt-20 pb-8">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="font-display font-bold text-[clamp(1.6rem,4vw,2.2rem)] max-w-[600px] mb-3.5">
          ¿Tienes un proyecto en mente? Hablemos.
        </h2>
        <p className="text-honeydew/70 max-w-[520px] mb-8">
          Disponible para trabajo remoto, híbrido o por proyecto.
        </p>

        <div className="flex flex-col gap-3.5 mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-sm inline-flex items-center gap-2.5 w-fit hover:text-vanilla transition-colors"
          >
            ✉ {profile.email}
          </a>
          <a
            href={`tel:+52${profile.phone.replace(/\s/g, '')}`}
            className="font-mono text-sm inline-flex items-center gap-2.5 w-fit hover:text-vanilla transition-colors"
          >
            ☎ {profile.phone}
          </a>

          {/* ✏️ EDITA AQUÍ (en src/data/profile.ts → contactLinks): agrega tus redes */}
          {profile.contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm inline-flex items-center gap-2.5 w-fit hover:text-vanilla transition-colors"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-honeydew/20 pt-6 flex justify-between flex-wrap gap-3 font-mono text-xs text-honeydew/60">
          <span>© 2026 {profile.name}. Todos los derechos reservados.</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  )
}
