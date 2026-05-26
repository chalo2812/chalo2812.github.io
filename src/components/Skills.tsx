import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Tecnologías
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Herramientas con las que trabajo día a día
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-accent-500/50 hover:bg-gray-900 transition-all group"
            >
              <i className={`${skill.icon} text-3xl md:text-4xl text-gray-400 group-hover:text-accent-500 transition-colors`} />
              <span className="text-xs text-gray-500 group-hover:text-gray-300 text-center font-medium transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
