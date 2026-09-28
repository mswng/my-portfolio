import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import avatar from '../assets/avatar.svg'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
        .from('[data-hero]', { y: 28, opacity: 0, stagger: 0.1 })
        .from('[data-avatar]', { scale: 0.92, opacity: 0, duration: 1 }, 0.1)
    }, root)
    return () => ctx.revert()
  }, [])

  const social = [
    { href: profile.github, label: 'GitHub', Icon: Github },
    { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
  ]

  return (
    <section ref={root} id="home" className="pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p data-hero className="mb-3 font-semibold text-sky-500">Hi, I'm {profile.name}</p>
          <h1 data-hero className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            {profile.role}
          </h1>
          <p data-hero className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500 dark:text-slate-400">{profile.intro}</p>
          <div data-hero className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={profile.cv} download className="btn btn-outline"><Download size={16} /> Download CV</a>
          </div>
          <div data-hero className="mt-8 flex gap-3">
            {social.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="rounded-full border border-sky-100 p-3 transition hover:-translate-y-0.5 hover:bg-sky-50 hover:text-sky-600 dark:border-navy-700 dark:hover:bg-navy-800">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div data-avatar className="mx-auto w-64 md:w-80">
          <div className="rounded-[2rem] bg-sky-100 p-3 shadow-lift dark:bg-navy-800">
            <img src={avatar} alt={`${profile.name} portrait`} className="aspect-square w-full rounded-3xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
