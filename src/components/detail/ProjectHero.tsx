'use client'
import { ExternalLink, Github, Globe, ShoppingBag } from 'lucide-react'
import type { Project, ProjectLink } from '@/types/project'
import { CategoryBadge } from '@/components/shared/CategoryBadge'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { VersionTag } from '@/components/shared/VersionTag'
const linkIcons: Record<string, React.ReactNode> = { github: <Github size={14} />, website: <Globe size={14} />, 'chrome-store': <ShoppingBag size={14} />, 'app-store': <ShoppingBag size={14} />, figma: <ExternalLink size={14} /> }
const linkLabels: Record<string, string> = { github: 'GitHub', website: 'Website', 'chrome-store': 'Chrome Store', 'app-store': 'App Store', figma: 'Figma' }
function LinkButton({ link }: { link: ProjectLink }) {
  return <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-secondary)', border: '1px solid var(--border)', padding: '5px 12px', borderRadius: '6px', transition: 'all 0.12s ease', fontFamily: 'var(--font-mono)' }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-primary)'; el.style.borderColor = 'var(--border-strong)' }} onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-secondary)'; el.style.borderColor = 'var(--border)' }}>{linkIcons[link.type]}{link.label ?? linkLabels[link.type]}</a>
}
export function ProjectHero({ project }: { project: Project }) {
  return (
    <div style={{ marginBottom: '52px' }}>
      <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '32px', transition: 'color 0.12s ease' }} onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}>← All projects</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <CategoryBadge category={project.category} />
        <StatusBadge status={project.status} />
        <VersionTag version={project.latestVersion} />
      </div>
      <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: '1.2', marginBottom: '10px' }}>{project.name}</h1>
      <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px', maxWidth: '560px' }}>{project.tagline}</p>
      {project.links.length > 0 && <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>{project.links.map(link => <LinkButton key={link.type + link.url} link={link} />)}</div>}
    </div>
  )
}
