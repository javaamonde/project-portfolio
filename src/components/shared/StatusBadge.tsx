import type { ProjectStatus } from '@/types/project'
const config: Record<ProjectStatus, { color: string; label: string }> = {
  active: { color: 'var(--status-active)', label: 'Active' },
  wip: { color: 'var(--status-wip)', label: 'In Progress' },
  archived: { color: 'var(--status-archived)', label: 'Archived' },
}
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const c = config[status]
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: c.color, fontFamily: 'var(--font-mono)' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: c.color, display: 'inline-block', flexShrink: 0 }} />{c.label}</span>
}
