import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gradient-main">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-100">
          Experiencia
        </h2>
        <p className="text-gray-500 text-center mb-14 text-sm">
          Trayectoria profesional
        </p>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16 animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-accent-500 border-4 border-[rgb(2,2,6)] shadow-lg shadow-accent-500/20" />

                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-gray-100">{exp.role}</h3>
                    {exp.period && (
                      <span className="text-xs text-gray-500">{exp.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-accent-400 mb-2">{exp.company}</p>
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
