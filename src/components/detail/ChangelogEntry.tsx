import type { ChangeEntry } from '@/types/project'
import { TagBadge } from '@/components/shared/TagBadge'
export function ChangelogEntry({ entry }: { entry: ChangeEntry }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '8px 0' }}>
      <TagBadge tag={entry.tag} />
      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', paddingTop: '1px' }}>{entry.text}</span>
    </div>
  )
}
