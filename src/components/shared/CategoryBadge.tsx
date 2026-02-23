import type { ProjectCategory } from '@/types/project'
const labels: Record<ProjectCategory, string> = {
  'chrome-extension': 'Chrome Extension', 'ios-widget': 'iOS Widget',
  'mac-menu-bar': 'Mac Menu Bar', 'web-app': 'Web App', 'cli-tool': 'CLI Tool',
}
export function CategoryBadge({ category }: { category: ProjectCategory }) {
  return <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 400, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)', border: '1px solid var(--border-strong)', padding: '2px 8px', borderRadius: '4px', display: 'inline-block', lineHeight: '16px' }}>{labels[category]}</span>
}
