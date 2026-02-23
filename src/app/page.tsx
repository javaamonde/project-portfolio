import { getAllProjects } from '@/lib/projects'
import { ProjectFeed } from '@/components/feed/ProjectFeed'
export default function HomePage() {
  const projects = getAllProjects()
  return <ProjectFeed projects={projects} />
}
