import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-term-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-term-dim font-mono">
            <span className="text-accent-500">gonzalo@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$ </span>
            ls -la proyectos/
          </span>
        </div>

        <div className="border border-term-border rounded p-4 bg-term-surface/50 mb-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border border-term-border rounded p-4 bg-term-surface hover:border-accent-500/50 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent-500 text-xs font-mono">drwxr-xr-x</span>
                  <h3 className="text-sm font-mono text-gray-200">{project.title}</h3>
                </div>

                <p className="text-xs text-term-dim mb-3 font-mono leading-relaxed">
                  {project.description || 'No description'}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 text-[10px] font-mono rounded border border-term-border text-term-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-term-dim hover:text-accent-500 transition-colors font-mono"
                  >
                    &gt; ver repo
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-term-dim hover:text-accent-500 transition-colors font-mono"
                    >
                      &gt; demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
