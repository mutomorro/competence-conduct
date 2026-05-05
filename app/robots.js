export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/static/',
    },
    sitemap: 'https://competence-conduct.org/sitemap.xml',
    host: 'https://competence-conduct.org',
  }
}
