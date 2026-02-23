import type { ChangeTag } from '@/types/project'
const styles: Record<ChangeTag, { bg: string; text: string; border: string; label: string }> = {
  new: { bg: 'var(--tag-new-bg)', text: 'var(--tag-new-text)', border: 'var(--tag-new-border)', label: 'new' },
  fixed: { bg: 'var(--tag-fixed-bg)', text: 'var(--tag-fixed-text)', border: 'var(--tag-fixed-border)', label: 'fixed' },
  updated: { bg: 'var(--tag-updated-bg)', text: 'var(--tag-updated-text)', border: 'var(--tag-updated-border)', label: 'updated' },
}
export function TagBadge({ tag }: { tag: ChangeTag }) {
  const s = styles[tag]
  return <span style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}`, fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: '4px', display: 'inline-block', flexShrink: 0, lineHeight: '16px' }}>{s.label}</span>
}
