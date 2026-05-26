export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-main pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-300/10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQFA3Asbg0NTDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1617131363771?e=1781136000&v=beta&t=TQiMCXFbp1SG8vY01IGsh9sSygtE89zyxinERgIPcmo"
          alt="Gonzalo Sola"
          className="w-28 h-28 rounded-2xl mx-auto mb-6 border border-white/10 shadow-2xl"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Gonzalo Sola
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-2 font-light">
          Desarrollador Java Senior
        </p>

        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
          Autodidacta y apasionado por la tecnología moderna.
          Más de 10 años transformando ideas en código.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all shadow-lg shadow-accent-500/25"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-6 py-3 rounded-xl glass-hover text-gray-300 font-medium transition-all"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
