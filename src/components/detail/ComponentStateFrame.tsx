'use client'
import { useState, useEffect } from 'react'
import type { ComponentState } from '@/types/project'
export function ComponentStateFrame({ state }: { state: ComponentState }) {
  const [height, setHeight] = useState(state.height ?? 320)
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === 'iframe-resize' && typeof event.data.height === 'number') setHeight(event.data.height + 32)
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])
  return (
    <div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase' }}>{state.name}</p>
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', background: '#1e1e1e' }}>
        <iframe src={state.src} title={state.name} sandbox="allow-scripts" loading="lazy" style={{ width: '100%', height, border: 'none', display: 'block' }} />
      </div>
      {state.description && <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.5' }}>{state.description}</p>}
    </div>
  )
}
