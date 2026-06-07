export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Impostor',
    description: 'Aplicación web interactiva con despliegue en Vercel.',
    tech: ['JavaScript', 'Juego web', 'Frontend', 'Vercel', 'UI interactiva'],
    github: 'https://github.com/chalo2812/impostor',
  },
  {
    title: 'Incremental',
    description: 'Proyecto hackathon con TypeScript, desplegado en Vercel.',
    tech: ['TypeScript', 'Hackathon', 'Vercel', 'Frontend', 'Prototipo'],
    github: 'https://github.com/chalo2812/incremental',
    demo: 'https://hackaton-vercel-2024.vercel.app',
  },
  {
    title: 'Galería',
    description: 'Galería de imágenes web construida con JavaScript y CSS.',
    tech: ['JavaScript', 'CSS', 'Galería', 'Imágenes', 'Web'],
    github: 'https://github.com/chalo2812/galeria',
  },
  {
    title: 'Docker Vue Spring',
    description: 'Aplicación full-stack con Vue.js + Spring Boot + Docker.',
    tech: ['Java', 'Spring Boot', 'Vue.js', 'Docker', 'Full-stack', 'REST API'],
    github: 'https://github.com/chalo2812/docker-vue-spring',
  },
  {
    title: 'API Gateway',
    description: 'API Gateway implementado en Java para arquitectura de microservicios.',
    tech: ['Java', 'API Gateway', 'Microservicios', 'Backend', 'Arquitectura'],
    github: 'https://github.com/chalo2812/api.gateway',
  },
  {
    title: 'Aplicación Android',
    description: 'Aplicación móvil nativa para Android desarrollada en Java.',
    tech: ['Java', 'Android', 'Mobile', 'App nativa', 'UI'],
    github: 'https://github.com/chalo2812/Aplicacion1',
  },
]
