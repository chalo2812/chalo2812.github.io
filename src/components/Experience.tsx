import { useState } from 'react'
import { experiences } from '../data/experience'

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  
  const recentExperiences = experiences.slice(0, 3)
  const olderExperiences = experiences.slice(3)
  const displayedExperiences = showAll ? experiences : recentExperiences

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-main">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-100">
          Experiencia
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent" />

          <div className="space-y-6">
            {displayedExperiences.map((exp, i) => (
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

          {olderExperiences.length > 0 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 rounded-lg border border-accent-500/50 text-accent-400 hover:bg-accent-500/10 transition-colors text-sm font-medium"
              >
                {showAll ? '← Ver menos' : `Ver más (${olderExperiences.length} anteriores)`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
