import { Github, Linkedin, Mail } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Contact() {
  const items = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'GitHub', value: 'github.com/your-username', href: profile.github, Icon: Github },
    { label: 'LinkedIn', value: 'linkedin.com/in/your-username', href: profile.linkedin, Icon: Linkedin },
  ]
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Get in touch" subtitle="Have a project, an opportunity, or just a question? My inbox is open." />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ label, value, href, Icon }) => (
            <a key={label} data-reveal href={href} target="_blank" rel="noreferrer" className="card card-hover flex items-center gap-4 p-6">
              <span className="rounded-xl bg-sky-50 p-3 text-sky-600 dark:bg-navy-800 dark:text-sky-300"><Icon size={20} /></span>
              <span className="min-w-0">
                <span className="block font-bold text-slate-900 dark:text-white">{label}</span>
                <span className="block truncate text-sm text-slate-500 dark:text-slate-400">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
