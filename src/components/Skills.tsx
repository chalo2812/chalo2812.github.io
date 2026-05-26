import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 terminal-grid">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-term-dim font-mono">
            <span className="text-accent-500">gonzalo@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$ </span>
            cat skills.txt
          </span>
        </div>

        <div className="border border-term-border rounded p-4 bg-term-surface/50 mb-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 p-3 rounded border border-term-border bg-term-surface hover:border-accent-500/50 transition-all group"
              >
                <i className={`${skill.icon} text-2xl text-term-dim group-hover:text-accent-500 transition-colors`} />
                <span className="text-[10px] text-term-dim group-hover:text-gray-400 text-center font-mono transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
