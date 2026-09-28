import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { profile } from '../data/profile'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-100 bg-white/80 backdrop-blur dark:border-navy-800 dark:bg-navy-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="text-lg font-extrabold text-slate-900 dark:text-white">
          {profile.name}<span className="text-sky-500">.</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`/#${l.toLowerCase()}`} className="text-sm font-medium transition hover:text-sky-500">{l}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle dark mode" className="rounded-full p-2 transition hover:bg-sky-50 dark:hover:bg-navy-800">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="rounded-full p-2 hover:bg-sky-50 dark:hover:bg-navy-800 md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-sky-100 bg-white px-5 py-3 dark:border-navy-800 dark:bg-navy-950 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={`/#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-medium">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
