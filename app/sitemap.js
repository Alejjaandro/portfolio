import { roleSlugs, rolePages } from './data/rolePages'
import { projectSlugs, projectPages } from './data/projectPages'
import { BASE_URL } from './data/config'

function getPriority(route) {
  if (route === '' || route === '/es') return 1
  if (route.includes('/projects/') || route.includes('/proyectos/')) return 0.75
  return 0.85
}

export default function sitemap() {
  const routes = [
    '',
    '/es',
    ...roleSlugs.map((slug) => `/${rolePages[slug].slugEn}`),
    ...roleSlugs.map((slug) => `/es/${rolePages[slug].slugEs}`),
    ...projectSlugs.map((slug) => `/projects/${projectPages[slug].slugEn}`),
    ...projectSlugs.map((slug) => `/es/proyectos/${projectPages[slug].slugEs}`),
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: getPriority(route),
  }))
}
