import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 py-8 text-center text-sm text-slate-500 dark:border-navy-800">
      © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and GSAP.
    </footer>
  )
}
