import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.set('[data-card]', { opacity: 0, y: 32 })
      ScrollTrigger.batch('[data-card]', {
        start: 'top 90%',
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }),
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="projects">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Projects" subtitle="A selection of things I've built." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  )
}
