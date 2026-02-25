export type ChangeTag = 'new' | 'fixed' | 'updated'

export interface ChangeEntry {
  tag: ChangeTag
  text: string
}

export interface ChangelogVersion {
  version: string  // "1.2.0"
  date: string     // ISO 8601: "2026-02-10"
  changes: ChangeEntry[]
}

export type DemoType = 'iframe' | 'image' | 'url'

export interface Demo {
  id: string
  title: string
  type: DemoType
  src: string
  description?: string
  height?: number
}

export interface ComponentState {
  id: string
  name: string
  src: string
  description?: string
  height?: number
}

export type LinkType = 'github' | 'chrome-store' | 'app-store' | 'website' | 'figma'

export interface ProjectLink {
  type: LinkType
  url: string
  label?: string
}

export type ProjectCategory =
  | 'chrome-extension'
  | 'ios-widget'
  | 'mac-menu-bar'
  | 'web-app'
  | 'cli-tool'

export type ProjectStatus = 'in-progress' | 'testing' | 'launched' | 'archived'

export interface Project {
  id: string               // url-safe slug
  name: string
  tagline: string
  description: string      // plain prose, supports \n for paragraphs
  category: ProjectCategory
  status: ProjectStatus
  thumbnail: string        // path under /public e.g. "/thumbnails/foo.png"
  latestVersion: string    // mirrors changelog[0].version for fast card access
  publishedAt: string      // ISO 8601
  featured?: boolean
  links: ProjectLink[]
  changelog: ChangelogVersion[]  // newest first
  demos: Demo[]
  componentStates: ComponentState[]
  tags?: string[]
}
