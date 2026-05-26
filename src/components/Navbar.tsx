import { useState } from 'react'

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick('#hero') }}
          className="flex items-center gap-3 text-gray-100 font-semibold"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-accent-500/20">
            G
          </span>
          Gonzalo Sola
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 hover:text-white transition-colors md:hidden"
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 space-y-3 glass">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              className="block text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
