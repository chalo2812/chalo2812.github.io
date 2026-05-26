import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-main">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-100">
          Skills
        </h2>
        <p className="text-gray-500 text-center mb-14 text-sm">
          Tecnologías con las que trabajo
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card flex flex-col items-center gap-3 p-5 group cursor-default"
            >
              <i className={`${skill.icon} colored text-2xl md:text-3xl opacity-30 group-hover:opacity-100 transition-all duration-300`} />
              <span className="text-xs text-gray-500 text-center font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
