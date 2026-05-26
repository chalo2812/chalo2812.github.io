export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden terminal-grid pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-term-bg via-term-bg/95 to-term-bg pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded border border-term-border bg-term-surface">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="w-2 h-2 rounded-full bg-accent-500" />
          <span className="text-xs text-term-dim ml-1 font-mono">terminal — 80x24</span>
        </div>

        <div className="text-left max-w-lg mx-auto mb-8">
          <p className="text-sm text-term-dim font-mono mb-2">
            <span className="text-accent-500">gonzalo@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$ </span>
            cat about.txt
          </p>

          <div className="border border-term-border rounded p-4 bg-term-surface">
            <img
              src="https://media.licdn.com/dms/image/v2/C4D03AQFA3Asbg0NTDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1617131363771?e=1781136000&v=beta&t=TQiMCXFbp1SG8vY01IGsh9sSygtE89zyxinERgIPcmo"
              alt="Gonzalo Sola"
              className="w-16 h-16 rounded-full mx-auto mb-3 border border-term-border"
            />
            <h1 className="text-lg md:text-xl font-mono text-gray-100 text-center">
              &gt; Gonzalo Sola
            </h1>
            <p className="text-sm text-accent-500 text-center font-mono mt-1">
              Desarrollador Java Senior
            </p>
            <p className="text-xs text-term-dim text-center mt-3 leading-relaxed max-w-sm mx-auto">
              Autodidacta y apasionado por la tecnología moderna.
              Transformando ideas en código con más de 10 años de experiencia.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-4 py-2 border border-accent-500 text-accent-500 hover:bg-accent-500/10 text-xs font-mono transition-all rounded"
          >
            $ ls proyectos/
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-4 py-2 border border-term-border text-term-dim hover:text-gray-100 hover:border-gray-600 text-xs font-mono transition-all rounded"
          >
            $ cat contacto
          </a>
        </div>

        <p className="mt-6 text-xs text-term-dim font-mono animate-blink">
          █
        </p>
      </div>
    </section>
  )
}
