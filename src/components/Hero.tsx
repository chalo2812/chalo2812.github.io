export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQFA3Asbg0NTDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1617131363771?e=1781136000&v=beta&t=TQiMCXFbp1SG8vY01IGsh9sSygtE89zyxinERgIPcmo"
          alt="Gonzalo Sola"
          className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-accent-500/30 shadow-xl shadow-accent-500/10"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Gonzalo Sola
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-2 font-mono">
          Desarrollador Java Senior
        </p>

        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Autodidacta y apasionado por la tecnología moderna. 
          Transformando ideas en código con más de 10 años de experiencia.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-accent-500/25"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-6 py-3 border border-gray-700 hover:border-accent-500 text-gray-300 rounded-lg font-medium transition-all"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
