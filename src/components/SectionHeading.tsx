export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div data-reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
  )
}
