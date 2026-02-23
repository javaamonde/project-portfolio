import { SectionHeading } from '@/components/shared/SectionHeading'
export function AboutSection({ description }: { description: string }) {
  const paragraphs = description.split('\n').filter(Boolean)
  return (
    <section style={{ marginBottom: '52px' }}>
      <SectionHeading id="about">About</SectionHeading>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '640px' }}>
        {paragraphs.map((p, i) => <p key={i} style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{p}</p>)}
      </div>
    </section>
  )
}
