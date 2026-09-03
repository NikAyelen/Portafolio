export interface SkillGroup {
  title: string
  skills: string[]
}

export interface GalleryImage {
  /** Ruta de la imagen dentro de /public, ej: "/proyectos/beta-1.png" */
  src: string
  alt: string
}

export interface FeaturedProject {
  tag: string
  title: string
  summary: string
  stack: string[]
  highlights: string[]
  /** Deja el arreglo vacío hasta tener capturas reales */
  gallery: GalleryImage[]
  /** Link a repo o demo en vivo, opcional */
  repoUrl?: string
  liveUrl?: string
}

export interface EducationItem {
  title: string
  institution: string
  years?: string
}

export interface ContactLink {
  label: string
  href: string
  icon: string
}

export interface Profile {
  name: string
  role: string
  heroTagline: string
  aboutParagraphs: string[]
  aboutChecklist: string[]
  skillGroups: SkillGroup[]
  featuredProject: FeaturedProject
  education: EducationItem[]
  email: string
  phone: string
  location: string
  contactLinks: ContactLink[]
}
