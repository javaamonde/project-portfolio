import type { ChangelogVersion } from '@/types/project'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ChangelogEntry } from './ChangelogEntry'
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}
export function ChangelogSection({ changelog }: { changelog: ChangelogVersion[] }) {
  return (
    <section style={{ marginBottom: '52px' }}>
      <SectionHeading id="changelog">Changelog</SectionHeading>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {changelog.map(version => (
          <div key={version.version}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>v{version.version}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)' }}>{formatDate(version.date)}</span>
            </div>
            <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '16px' }}>
              {version.changes.map((entry, i) => <ChangelogEntry key={i} entry={entry} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
