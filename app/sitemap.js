const BASE_URL = 'https://competence-conduct.org'

const ROUTES = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/standard', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/diagnostic', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/challenges', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/questions', priority: 0.7, changeFrequency: 'monthly' },
]

export default function sitemap() {
  const lastModified = new Date()
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
