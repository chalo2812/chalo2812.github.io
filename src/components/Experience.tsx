import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 terminal-grid">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-term-dim font-mono">
            <span className="text-accent-500">gonzalo@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$ </span>
            cat experiencia.log
          </span>
        </div>

        <div className="border border-term-border rounded p-4 bg-term-surface/50 mb-10">
          <div className="space-y-0 divide-y divide-term-border">
            {experiences.map((exp, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0 animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex items-start gap-3">
                  <span className="text-accent-500 text-xs font-mono mt-0.5 shrink-0">{'>'}</span>
                  <div className="min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                      <h3 className="text-sm font-mono text-gray-200">{exp.role}</h3>
                      {exp.period && (
                        <span className="text-[10px] text-term-dim font-mono">{exp.period}</span>
                      )}
                    </div>
                    <p className="text-xs text-accent-500/80 font-mono mt-0.5">{exp.company}</p>
                    <p className="text-xs text-term-dim font-mono mt-1 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
