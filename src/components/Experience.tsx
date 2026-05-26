import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Experiencia
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Trayectoria profesional
        </p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent-500 border-2 border-gray-950" />

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-accent-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-gray-100">{exp.role}</h3>
                    {exp.period && (
                      <span className="text-xs text-gray-500 font-mono">{exp.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-accent-500 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
