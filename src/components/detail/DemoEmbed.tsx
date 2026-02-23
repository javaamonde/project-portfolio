'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import type { Demo } from '@/types/project'
export function DemoEmbed({ demo }: { demo: Demo }) {
  const [iframeHeight, setIframeHeight] = useState(demo.height ?? 320)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === 'iframe-resize' && typeof event.data.height === 'number') setIframeHeight(event.data.height + 32)
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])
  if (demo.type === 'image') return <div style={{ borderRadius: '8px', overflow: 'hidden', position: 'relative', width: '100%' }}><Image src={demo.src} alt={demo.title} width={800} height={450} style={{ width: '100%', height: 'auto', display: 'block' }} /></div>
  return (
    <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', background: '#1e1e1e', position: 'relative' }}>
      {demo.type === 'url' && <div style={{ padding: '6px 12px', background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)' }}>↗ external preview</span></div>}
      <iframe ref={iframeRef} src={demo.src} title={demo.title} sandbox="allow-scripts allow-same-origin" loading="lazy" style={{ width: '100%', height: iframeHeight, border: 'none', display: 'block' }} />
    </div>
  )
}
