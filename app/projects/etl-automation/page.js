import ProjectDetail from '../../components/ProjectDetail'
import Contact from '../../components/Contact'
import { projectPages } from '../../data/projectPages'
import { BASE_URL } from '../../data/config'

const projectData = projectPages['etl-automation']

export const metadata = {
  title: projectData.metadataTitle.en,
  description: projectData.metadataDescription.en,
  alternates: {
    canonical: '/projects/etl-automation',
    languages: {
      'en-US': `${BASE_URL}/projects/etl-automation`,
      'es-ES': `${BASE_URL}/es/proyectos/automatizacion-etl`,
      'x-default': `${BASE_URL}/projects/etl-automation`,
    },
  },
  openGraph: {
    title: projectData.metadataTitle.en,
    description: projectData.metadataDescription.en,
    url: `${BASE_URL}/projects/etl-automation`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: projectData.tagline.en,
  author: {
    '@type': 'Person',
    name: 'Alejandro Olaso',
    url: BASE_URL,
  },
  description: projectData.summary.en,
  url: `${BASE_URL}/projects/etl-automation`,
  keywords: projectData.tags.join(', '),
}

export default function ETLAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ProjectDetail
        company={projectData.company.en}
        role={projectData.role.en}
        tagline={projectData.tagline.en}
        summary={projectData.summary.en}
        bullets={projectData.bullets.en}
        tags={projectData.tags}
      />
      <Contact locale="en" />
    </>
  )
}
