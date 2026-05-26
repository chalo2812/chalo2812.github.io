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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 hover:text-accent-500 transition-colors md:hidden"
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

        <a href="#hero" onClick={() => handleClick('#hero')} className="flex items-center gap-2">
          <img
            src="https://avatars3.githubusercontent.com/u/6732307?v=4"
            alt="Gonzalo Sola"
            className="w-8 h-8 rounded-full border border-gray-700"
          />
          <span className="font-semibold text-gray-100 hidden sm:inline">Gonzalo Sola</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              className="text-sm text-gray-400 hover:text-accent-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              className="block text-gray-300 hover:text-accent-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
