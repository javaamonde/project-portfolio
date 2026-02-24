'use client'

import { useState, useMemo } from 'react'
import type { Project, ProjectCategory } from '@/types/project'
import { ProjectCard } from './ProjectCard'
import { CategoryFilter } from './CategoryFilter'

export function ProjectFeed({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')

  const categories = useMemo(() => {
    const seen = new Set<ProjectCategory>()
    projects.forEach(p => seen.add(p.category))
    return Array.from(seen)
  }, [projects])

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory),
    [projects, activeCategory]
  )

  return (
    <main
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '48px 24px',
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: '40px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '24px',
          }}
        >
          Projects
        </h1>
        {categories.length > 1 && (
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        )}
      </header>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>No projects yet.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
            alignItems: 'stretch',
          }}
        >
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </main>
  )
}
