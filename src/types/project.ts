export type ChangeTag = 'new' | 'fixed' | 'updated'
export interface ChangeEntry { tag: ChangeTag; text: string }
export interface ChangelogVersion { version: string; date: string; changes: ChangeEntry[] }
export type DemoType = 'iframe' | 'image' | 'url'
export interface Demo { id: string; title: string; type: DemoType; src: string; description?: string; height?: number }
export interface ComponentState { id: string; name: string; src: string; description?: string; height?: number }
export type LinkType = 'github' | 'chrome-store' | 'app-store' | 'website' | 'figma'
export interface ProjectLink { type: LinkType; url: string; label?: string }
export type ProjectCategory = 'chrome-extension' | 'ios-widget' | 'mac-menu-bar' | 'web-app' | 'cli-tool'
export type ProjectStatus = 'active' | 'wip' | 'archived'
export interface Project {
  id: string; name: string; tagline: string; description: string;
  category: ProjectCategory; status: ProjectStatus; thumbnail: string;
  latestVersion: string; publishedAt: string; featured?: boolean;
  links: ProjectLink[]; changelog: ChangelogVersion[];
  demos: Demo[]; componentStates: ComponentState[]; tags?: string[];
}
