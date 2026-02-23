'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types/project'
import { CategoryBadge } from '@/components/shared/CategoryBadge'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { VersionTag } from '@/components/shared/VersionTag'
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <article
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.15s ease, background 0.15s ease' }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-strong)'; el.style.background = 'var(--bg-card-hover)' }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.background = 'var(--bg-card)' }}
      >
        <div style={{ width: '100%', aspectRatio: '3 / 2', background: '#1e1e1e', position: 'relative', overflow: 'hidden' }}>
          {project.thumbnail
            ? <Image src={project.thumbnail} alt={project.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            : <ThumbnailPlaceholder name={project.name} />}
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <CategoryBadge category={project.category} />
            <VersionTag version={project.latestVersion} />
          </div>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '5px', lineHeight: '1.3' }}>{project.name}</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '14px' }}>{project.tagline}</p>
          <StatusBadge status={project.status} />
        </div>
      </article>
    </Link>
  )
}
function ThumbnailPlaceholder({ name }: { name: string }) {
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
  return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #252525 0%, #1a1a1a 100%)' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: '28px', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '-0.02em' }}>{initials}</span></div>
}
