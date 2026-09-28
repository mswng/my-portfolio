import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-sky-50/60 dark:bg-navy-900/40">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Skills" subtitle="Technologies I work with." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.title} data-reveal className="card card-hover p-6">
              <h3 className="mb-4 font-bold text-slate-900 dark:text-white">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="chip !text-sm">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
