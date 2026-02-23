import type { Project } from '@/types/project'
import claudeTokenTracker from '../../data/projects/claude-token-tracker.json'
const allProjects: Project[] = [claudeTokenTracker as Project]
export function getAllProjects(): Project[] {
  return [...allProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}
export function getProjectBySlug(slug: string): Project | null {
  return allProjects.find(p => p.id === slug) ?? null
}
export function getAllSlugs(): string[] { return allProjects.map(p => p.id) }
