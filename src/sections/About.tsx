import { Code2, GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { timeline } from '../data/timeline'

export default function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="About Me" />
        <p data-reveal className="mb-8 max-w-3xl text-lg leading-relaxed">{profile.about}</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div data-reveal className="card p-6">
            <GraduationCap className="mb-3 text-sky-500" />
            <h3 className="font-bold text-slate-900 dark:text-white">Education</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{timeline[0].title}, {timeline[0].place}</p>
          </div>
          <div data-reveal className="card p-6">
            <Code2 className="mb-3 text-sky-500" />
            <h3 className="font-bold text-slate-900 dark:text-white">Development interests</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-500 dark:text-slate-400">
              {profile.interests.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
