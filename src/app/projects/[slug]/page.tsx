import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllSlugs, getProjectBySlug } from '@/lib/projects'
import { ProjectHero } from '@/components/detail/ProjectHero'
import { AboutSection } from '@/components/detail/AboutSection'
import { ChangelogSection } from '@/components/detail/ChangelogSection'
import { DemoSection } from '@/components/detail/DemoSection'
import { ComponentsSection } from '@/components/detail/ComponentsSection'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return { title: `${project.name} — Projects`, description: project.tagline }
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  return (
    <main style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px' }}>
      <ProjectHero project={project} />
      <AboutSection description={project.description} />
      {project.changelog.length > 0 && <ChangelogSection changelog={project.changelog} />}
      {project.demos.length > 0 && <DemoSection demos={project.demos} />}
      {project.componentStates.length > 0 && <ComponentsSection componentStates={project.componentStates} />}
    </main>
  )
}
