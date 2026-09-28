import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/timeline'

export default function Experience() {
  return (
    <section id="experience" className="bg-sky-50/60 dark:bg-navy-900/40">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading title="Experience & Education" />
        <ol className="relative ml-3 border-l-2 border-sky-200 dark:border-navy-700">
          {timeline.map((t) => (
            <li key={t.title} data-reveal className="mb-10 ml-8 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-sky-50 bg-sky-500 dark:border-navy-900" />
              <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">{t.period}</p>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.place}</p>
              {t.note && <p className="mt-2 text-sm">{t.note}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
