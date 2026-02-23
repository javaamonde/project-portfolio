'use client'
import type { ProjectCategory } from '@/types/project'
const categoryLabels: Record<ProjectCategory, string> = {
  'chrome-extension': 'Chrome Extension', 'ios-widget': 'iOS Widget',
  'mac-menu-bar': 'Mac Menu Bar', 'web-app': 'Web App', 'cli-tool': 'CLI',
}
interface Props { categories: ProjectCategory[]; active: ProjectCategory | 'all'; onChange: (cat: ProjectCategory | 'all') => void }
export function CategoryFilter({ categories, active, onChange }: Props) {
  const options: (ProjectCategory | 'all')[] = ['all', ...categories]
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {options.map(cat => {
        const isActive = cat === active
        const label = cat === 'all' ? 'All' : categoryLabels[cat]
        return <button key={cat} onClick={() => onChange(cat)} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: isActive ? 700 : 400, letterSpacing: '0.04em', textTransform: 'uppercase', color: isActive ? 'var(--text-primary)' : 'var(--text-muted)', background: isActive ? 'var(--bg-elevated)' : 'transparent', border: `1px solid ${isActive ? 'var(--border-strong)' : 'var(--border)'}`, padding: '5px 12px', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.12s ease' }}>{label}</button>
      })}
    </div>
  )
}
