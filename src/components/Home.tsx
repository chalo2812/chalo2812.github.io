export default function Home() {
  const terminalLines = [
    { prompt: 'gonzalo@portfolio:~$', command: 'whoami', output: 'java senior dev | linux mode: on' },
    { prompt: 'gonzalo@portfolio:~$', command: 'cat mindset.txt', output: 'autodidacta, curioso, shippeando sin drama' },
    { prompt: 'gonzalo@portfolio:~$', command: 'systemctl status ideas', output: 'active (running) since hace mas de 10 años' },
    { prompt: 'gonzalo@portfolio:~$', command: 'sudo ./deploy-ideas.sh', output: 'build passed: cafe + codigo + paciencia' },
  ]

  const badges = [
    { label: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/10b981' },
    { label: 'Spring', icon: 'https://cdn.simpleicons.org/spring/10b981' },
    { label: 'Linux', icon: 'https://cdn.simpleicons.org/linux/e5e7eb' },
    { label: 'Docker', icon: 'https://cdn.simpleicons.org/docker/06b6d4' },
    { label: 'APIs', icon: 'https://cdn.simpleicons.org/openapiinitiative/10b981' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-main pt-20 pb-16">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="terminal-grid absolute inset-0" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center animate-fade-in">
        <div className="text-center lg:text-left">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQFA3Asbg0NTDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1617131363771?e=1781136000&v=beta&t=TQiMCXFbp1SG8vY01IGsh9sSygtE89zyxinERgIPcmo"
            alt="Gonzalo Sola"
            className="w-24 h-24 rounded-2xl mx-auto lg:mx-0 mb-6 border border-white/10 shadow-2xl"
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100 leading-tight">
            Gonzalo Sola
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-3 font-light">
            Fullstack Senior
          </p>

          <p className="text-gray-500 max-w-xl mx-auto lg:mx-0 mb-8 text-sm leading-relaxed">
            Autodidacta y apasionado por la tecnologia moderna. Mas de 10 años
            transformando ideas en codigo, con logs claros y deploys sin supersticion.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            {badges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-mono text-gray-300">
                <img src={badge.icon} alt="" className="w-5 h-5" aria-hidden="true" />
                {badge.label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          </div>
        </div>

        <div className="terminal-window relative overflow-hidden rounded-lg border border-emerald-400/20 bg-gray-950/90 shadow-2xl shadow-emerald-950/40">
          <div className="flex items-center border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-300/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            </div>
          </div>

          <div className="space-y-5 px-4 sm:px-6 py-6 font-mono text-xs sm:text-sm">
            {terminalLines.map((line) => (
              <div key={line.command}>
                <p className="text-emerald-300">
                  <span className="text-cyan-300">{line.prompt}</span> {line.command}
                </p>
                <p className="mt-1 text-gray-400 pl-4 border-l border-emerald-400/20">
                  {line.output}
                </p>
              </div>
            ))}

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <p className="text-gray-500">uptime</p>
                <p className="text-emerald-300">10+ años</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <p className="text-gray-500">bugs fixed</p>
                <p className="text-emerald-300">muchos</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <p className="text-gray-500">status</p>
                <p className="text-emerald-300">ready</p>
              </div>
            </div>

            <p className="text-emerald-300">
              <span className="text-cyan-300">gonzalo@portfolio:~$</span> <span className="terminal-cursor">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
