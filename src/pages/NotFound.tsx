import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white">404</h1>
      <p>This page doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Back home</Link>
    </main>
  )
}
