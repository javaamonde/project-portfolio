'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types/project'
import { CategoryBadge } from '@/components/shared/CategoryBadge'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { VersionTag } from '@/components/shared/VersionTag'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} style={{ display: 'flex', height: '100%' }}>
      <article
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'border-color 0.15s ease, background 0.15s ease',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'var(--border-strong)'
          el.style.background = 'var(--bg-card-hover)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'var(--border)'
          el.style.background = 'var(--bg-card)'
        }}
      >
        {/* Thumbnail — 3:2 ratio */}
        <div
          style={{
            width: '100%',
            aspectRatio: '3 / 2',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <ThumbnailPlaceholder name={project.name} category={project.category} />
          {project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          {/* Top row: category + version */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <CategoryBadge category={project.category} />
            <VersionTag version={project.latestVersion} />
          </div>

          {/* Name */}
          <h3
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '5px',
              lineHeight: '1.3',
            }}
          >
            {project.name}
          </h3>

          {/* Tagline */}
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: '1.5',
              marginBottom: '14px',
            }}
          >
            {project.tagline}
          </p>

          {/* Bottom row: status — pushed to bottom */}
          <div style={{ marginTop: 'auto' }}>
            <StatusBadge status={project.status} />
          </div>
        </div>
      </article>
    </Link>
  )
}

const CATEGORY_GRADIENTS: Record<string, { from: string; to: string; accent: string }> = {
  'mac-menu-bar':      { from: '#2e1065', to: '#1e1b4b', accent: '#a78bfa' },
  'chrome-extension':  { from: '#0f2d4a', to: '#0c1a2e', accent: '#60a5fa' },
  'ios-widget':        { from: '#431407', to: '#1c0a03', accent: '#fb923c' },
  'web-app':           { from: '#052e16', to: '#0a0f0d', accent: '#4ade80' },
  'cli-tool':          { from: '#1c1917', to: '#0c0a09', accent: '#a8a29e' },
}

function ThumbnailPlaceholder({ name, category }: { name: string; category: string }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()

  const g = CATEGORY_GRADIENTS[category] ?? { from: '#1e1e2e', to: '#111', accent: '#888' }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${g.from} 0%, ${g.to} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse at 30% 40%, ${g.accent}22 0%, transparent 70%)`,
      }} />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '32px',
          fontWeight: 700,
          color: g.accent,
          letterSpacing: '-0.02em',
          opacity: 0.7,
          position: 'relative',
        }}
      >
        {initials}
      </span>
    </div>
  )
}
