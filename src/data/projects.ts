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
    tech: ['JavaScript'],
    github: 'https://github.com/chalo2812/impostor',
    demo: 'https://impostor-phi-seven.vercel.app',
  },
  {
    title: 'Incremental',
    description: 'Proyecto hackathon con TypeScript, desplegado en Vercel.',
    tech: ['TypeScript'],
    github: 'https://github.com/chalo2812/incremental',
    demo: 'https://hackaton-vercel-2024.vercel.app',
  },
  {
    title: 'Galería',
    description: 'Galería de imágenes web construida con JavaScript y CSS.',
    tech: ['JavaScript', 'CSS', 'PHP'],
    github: 'https://github.com/chalo2812/galeria',
  },
  {
    title: 'Docker Vue Spring',
    description: 'Aplicación full-stack con Vue.js + Spring Boot + Docker.',
    tech: ['Java', 'Vue.js', 'Docker'],
    github: 'https://github.com/chalo2812/docker-vue-spring',
  },
  {
    title: 'API Gateway',
    description: 'API Gateway implementado en Java para arquitectura de microservicios.',
    tech: ['Java'],
    github: 'https://github.com/chalo2812/api.gateway',
  },
  {
    title: 'Aplicación Android',
    description: 'Aplicación móvil nativa para Android desarrollada en Java.',
    tech: ['Java', 'Android'],
    github: 'https://github.com/chalo2812/Aplicacion1',
  },
]
