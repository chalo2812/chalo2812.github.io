import { skills } from '../data/skills'

export default function Skills() {
  const desktopColumns = 4
  const lastRowCount = skills.length % desktopColumns || desktopColumns
  const lastRowStart = skills.length - lastRowCount

  const getSpan = (index: number) => {
    const totalSkills = skills.length
    const mobileColumns = 2
    const tabletColumns = 3
    const desktopColumns = 4

    const mobileLastRowCount = totalSkills % mobileColumns || mobileColumns
    const mobileLastRowStart = totalSkills - mobileLastRowCount

    const tabletLastRowCount = totalSkills % tabletColumns || tabletColumns
    const tabletLastRowStart = totalSkills - tabletLastRowCount

    const desktopLastRowCount = totalSkills % desktopColumns || desktopColumns
    const desktopLastRowStart = totalSkills - desktopLastRowCount

    // Mobile (2 columns)
    let mobileSpan = 'col-span-1'
    if (index >= mobileLastRowStart && mobileLastRowCount < mobileColumns) {
      mobileSpan = mobileLastRowCount === 1 ? 'col-span-2' : 'col-span-1'
    }

    // Tablet (3 columns)
    let tabletSpan = 'sm:col-span-1'
    if (index >= tabletLastRowStart && tabletLastRowCount < tabletColumns) {
      if (tabletLastRowCount === 1) {
        tabletSpan = 'sm:col-span-3'
      } else if (tabletLastRowCount === 2) {
        tabletSpan = 'sm:col-span-1-5'
      }
    }

    // Desktop (12 columns, 4 items per row = 3 spans each)
    let desktopSpan = 'lg:col-span-3'
    if (index >= desktopLastRowStart && desktopLastRowCount !== desktopColumns) {
      if (desktopLastRowCount === 1) {
        desktopSpan = 'lg:col-span-12'
      } else if (desktopLastRowCount === 2) {
        desktopSpan = 'lg:col-span-6'
      } else if (desktopLastRowCount === 3) {
        desktopSpan = 'lg:col-span-4'
      }
    }

    return `${mobileSpan} ${tabletSpan} ${desktopSpan}`
  }

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-main">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-100">
          Skills
        </h2>
        <p className="text-gray-500 text-center mb-14 text-sm">
          Tecnologías con las que trabajo
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-card min-h-32 flex flex-col items-center justify-center gap-3 p-5 group cursor-default bg-gray-900/30 ${getSpan(index)}`}
            >
              <i className={`${skill.icon} colored text-4xl md:text-5xl grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`} />
              <span className="text-sm text-gray-400 group-hover:text-gray-200 text-center font-medium transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
