import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) =>
        gsap.from(el, {
          y: 24, opacity: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }),
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={root}>
      <Hero /><About /><Skills /><Projects /><Experience /><Contact />
    </main>
  )
}
