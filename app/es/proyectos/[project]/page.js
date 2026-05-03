import { notFound } from 'next/navigation'
import ProjectDetail from '../../../components/ProjectDetail'
import Contact from '../../../components/Contact'
import { projectPages, projectSlugs, getProjectByAnySlug } from '../../../data/projectPages'
import { BASE_URL } from '../../../data/config'

export function generateStaticParams() {
  return projectSlugs.map((project) => ({ project: projectPages[project].slugEs }))
}

export function generateMetadata({ params }) {
  const result = getProjectByAnySlug(params.project)
  if (!result) return {}
  const { page } = result

  return {
    title: page.metadataTitle.es,
    description: page.metadataDescription.es,
    alternates: {
      canonical: `/es/proyectos/${page.slugEs}`,
      languages: {
        'en-US': `${BASE_URL}/projects/${page.slugEn}`,
        'es-ES': `${BASE_URL}/es/proyectos/${page.slugEs}`,
        'x-default': `${BASE_URL}/projects/${page.slugEn}`,
      },
    },
    openGraph: {
      title: page.metadataTitle.es,
      description: page.metadataDescription.es,
      url: `${BASE_URL}/es/proyectos/${page.slugEs}`,
    },
  }
}

export default function ProjectPageEs({ params }) {
  const result = getProjectByAnySlug(params.project)
  if (!result) {
    notFound()
  }
  const { page } = result

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: page.tagline.es,
    author: {
      '@type': 'Person',
      name: 'Alejandro Olaso',
      url: BASE_URL,
    },
    description: page.summary.es,
    url: `${BASE_URL}/es/proyectos/${page.slugEs}`,
    keywords: page.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ProjectDetail
        company={page.company.es}
        role={page.role.es}
        tagline={page.tagline.es}
        summary={page.summary.es}
        bullets={page.bullets.es}
        tags={page.tags}
      />
      <Contact locale="es" />
    </>
  )
}
