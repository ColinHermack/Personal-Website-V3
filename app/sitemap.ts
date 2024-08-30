import { getProjects } from 'app/projects/utils';

export const baseUrl = 'https://colinhermack.com'

export default async function sitemap() {
  let projects = getProjects().map((project) => {
    url: `${baseUrl}/projects/${project.slug}`
  })

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects]
}
