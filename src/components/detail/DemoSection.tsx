'use client'
import { useState } from 'react'
import type { Demo } from '@/types/project'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { DemoEmbed } from './DemoEmbed'
export function DemoSection({ demos }: { demos: Demo[] }) {
  const [activeId, setActiveId] = useState(demos[0]?.id)
  if (demos.length === 0) return null
  const activeDemo = demos.find(d => d.id === activeId) ?? demos[0]
  return (
    <section style={{ marginBottom: '52px' }}>
      <SectionHeading id="demo">Demo</SectionHeading>
      {demos.length > 1 && <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', borderBottom: '1px solid var(--border)' }}>{demos.map(demo => { const isActive = demo.id === activeId; return <button key={demo.id} onClick={() => setActiveId(demo.id)} style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: isActive ? 'var(--text-primary)' : 'var(--text-muted)', background: 'none', border: 'none', borderBottom: `2px solid ${isActive ? 'var(--text-primary)' : 'transparent'}`, padding: '8px 14px', cursor: 'pointer', marginBottom: '-1px', transition: 'all 0.12s ease', letterSpacing: '0.02em' }}>{demo.title}</button> })}</div>}
      <DemoEmbed demo={activeDemo} />
      {activeDemo.description && <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: '1.5' }}>{activeDemo.description}</p>}
    </section>
  )
}
