import { useState } from 'react'

const navItems = [
  { label: 'hero', href: '#hero' },
  { label: 'skills', href: '#skills' },
  { label: 'proyectos', href: '#projects' },
  { label: 'experiencia', href: '#experience' },
  { label: 'contacto', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-term-border bg-term-bg/95 backdrop-blur-sm">
      <div className="flex items-center h-9 px-3 gap-2 border-b border-term-border bg-term-surface">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
        <span className="text-xs text-term-dim ml-2 font-mono select-none">
          gonzalo@portfolio:~$
        </span>
      </div>

      <div className="flex items-center justify-between px-4 h-10">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick('#hero') }}
          className="flex items-center gap-2 text-xs text-accent-500 font-mono hover:underline"
        >
          <span className="w-6 h-6 rounded-full border border-accent-500 bg-term-surface flex items-center justify-center text-accent-500 text-[10px] font-bold font-mono shrink-0">
            G
          </span>
          ~/portfolio $
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-term-dim hover:text-accent-500 transition-colors md:hidden text-xs font-mono"
        >
          {open ? '[close]' : '[menu]'}
        </button>

        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              className="text-xs text-term-dim hover:text-accent-500 transition-colors font-mono"
            >
              $ cat {item.label}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-term-border bg-term-surface px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              className="block text-xs text-term-dim hover:text-accent-500 transition-colors font-mono"
            >
              $ cat {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
