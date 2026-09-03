import type { Profile } from '../types'


export const profile: Profile = {
  name: 'Nikte Hernández',
  role: 'Full-Stack Developer',

  // frase de presentación en el hero
  heroTagline:
    'Desarrolladora de software full-stack. Construyo aplicaciones web con arquitecturas claras, del diseño de la base de datos a la interfaz.',

  //biografía
  aboutParagraphs: [
    'Soy estudiante de Ingenieria en Desarrollo de Software Multiplataforma por la Universidad Tecnológica de Cancún. Me especializo en construir aplicaciones web robustas, desde el diseño de arquitectura hasta la implementación del backend y la interfaz.',
    'Me gusta documentar antes de programar: pensar en la arquitectura, los casos de uso y el flujo de datos antes de escribir la primera línea de código.',
  ],

  aboutChecklist: [
    'Arquitectura de cuatro capas: interfaz, controlador, gestor y base de datos',
    'Stack principal: TypeScript, React, Node.js y Express',
    'Bases de datos relacionales y no relacionales: SQL Server, MySQL, MariaDB y MongoDB',
    'Documentación técnica con diagramas UML, casos de uso y diagramas de secuencia',
  ],

  skillGroups: [
    {
      title: 'Lenguajes & Frameworks',
      skills: ['TypeScript', 'React', 'Node.js', 'Express', 'HTML', 'Tailwind', 'CSS'],
    },
    {
      title: 'Bases de Datos',
      skills: ['SQL Server', 'MySQL', 'MariaDB', 'MongoDB'],
    },
    {
      title: 'Herramientas & Flujo',
      skills: ['Git', 'GitHub', 'Vite', 'VS Code', 'APIs REST'],
    },
  ],

  featuredProject: {
    tag: 'Proyecto en equipo',
    title: 'BETA — Plataforma EdTech de Salud Financiera',
    summary:
      'Plataforma pedagógica para simular finanzas personales, diseñada con una arquitectura de cuatro capas y backend en TypeScript conectado a SQL Server.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQL Server', 'Tailwind CSS'],
    
    highlights: [
      'Diseñé la arquitectura de cuatro capas (interfaz → controlador → gestor → base de datos) para la plataforma.',
      'Documenté el diseño con diagramas UML, casos de uso y diagramas de secuencia antes de implementar.',
      'Construí el backend con Node.js, Express y TypeScript.',
      'Migré la persistencia de datos, que inicialmente vivía en arrays en memoria, hacia SQL Server usando el driver mssql, con un pool de conexiones singleton y consultas parametrizadas.',
    ],
    
    gallery: [
  { src: '/proyectos/beta-1.png', alt: 'Pantalla de bienvenida de BETA, planeación financiera personalizada' },
  { src: '/proyectos/beta-2.png', alt: 'Dashboard para gestionar tu dinero dentro de BETA' },
  { src: '/proyectos/beta-3.png', alt: 'Vista de tarjeta y resumen financiero en BETA' },
  { src: '/proyectos/beta-4.png', alt: 'Vista de menu principal' },
],
  
  },

  education: [
    {
      title: 'Ingeniería en Desarrollo de Software Multiplataforma',
      institution: 'Universidad Tecnológica de Cancún',
      years: '18',
    },
    
  ],

  email: 'niktehernandezgonz@gmail.com',
  phone: '998 865 4702',
  location: 'Cancún, Quintana Roo, México',

  // redes 
  contactLinks: [
    { label: 'GitHub', href: 'https://github.com/NikAyelen', icon: '⌥' },
    // { label: 'LinkedIn', href: 'https://linkedin.com/in/tu-usuario', icon: 'in' },
  ],
}
