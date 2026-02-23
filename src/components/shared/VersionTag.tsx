export function VersionTag({ version, className = '' }: { version: string; className?: string }) {
  return <span className={className} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>v{version}</span>
}
