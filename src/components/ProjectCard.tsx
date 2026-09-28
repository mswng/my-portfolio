import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectCard({ project: p }: { project: Project }) {
  const featured = p.featured
  return (
    <article data-card className={`card card-hover overflow-hidden ${featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}>
      <img src={p.image} alt={`${p.title} preview`} className="h-full w-full object-cover" loading="lazy" />
      <div className="flex flex-col p-6 md:p-8">
        {featured && <span className="chip mb-3 w-fit">Featured project</span>}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => <li key={t} className="chip">{t}</li>)}
        </ul>
        <div className="mt-auto flex gap-3 pt-6">
          <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline !px-4 !py-2"><Github size={16} /> Code</a>
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary !px-4 !py-2"><ExternalLink size={16} /> Live Demo</a>
        </div>
      </div>
    </article>
  )
}
