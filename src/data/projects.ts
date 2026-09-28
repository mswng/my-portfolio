import cover from '../assets/project.svg'

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  image: string
  featured?: boolean
}

// Placeholder descriptions and links: edit to match your real projects.
export const projects: Project[] = [
  {
    title: 'AI Tour Guide',
    description:
      'An AI-powered travel assistant that answers questions about destinations using retrieval-augmented generation over a vector index. Replace this text with your own summary.',
    tech: ['React', 'TypeScript', 'Python', 'RAG', 'FAISS'],
    github: 'https://github.com/your-username/ai-tour-guide',
    demo: 'https://example.com',
    image: cover,
    featured: true,
  },
  {
    title: 'Project Two',
    description: 'Short description of a second project and the problem it solves.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/your-username/project-two',
    demo: 'https://example.com',
    image: cover,
  },
  {
    title: 'Project Three',
    description: 'Short description of a third project and what you learned building it.',
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/your-username/project-three',
    demo: 'https://example.com',
    image: cover,
  },
]
