import type { ComponentState } from '@/types/project'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ComponentStateFrame } from './ComponentStateFrame'
export function ComponentsSection({ componentStates }: { componentStates: ComponentState[] }) {
  if (componentStates.length === 0) return null
  return (
    <section style={{ marginBottom: '52px' }}>
      <SectionHeading id="components">Components</SectionHeading>
      <div style={{ display: 'grid', gridTemplateColumns: componentStates.length === 1 ? '1fr' : 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
        {componentStates.map(state => <ComponentStateFrame key={state.id} state={state} />)}
      </div>
    </section>
  )
}
