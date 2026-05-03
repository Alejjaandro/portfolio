import ProjectDetail from '../../components/ProjectDetail'
import Contact from '../../components/Contact'
import { projectPages } from '../../data/projectPages'
import { BASE_URL } from '../../data/config'

const projectData = projectPages['b2b-platform']

export const metadata = {
  title: projectData.metadataTitle.en,
  description: projectData.metadataDescription.en,
  alternates: {
    canonical: '/projects/b2b-platform',
    languages: {
      'en-US': `${BASE_URL}/projects/b2b-platform`,
      'es-ES': `${BASE_URL}/es/proyectos/plataforma-b2b`,
      'x-default': `${BASE_URL}/projects/b2b-platform`,
    },
  },
  openGraph: {
    title: projectData.metadataTitle.en,
    description: projectData.metadataDescription.en,
    url: `${BASE_URL}/projects/b2b-platform`,
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
  url: `${BASE_URL}/projects/b2b-platform`,
  keywords: projectData.tags.join(', '),
}

export default function B2BPlatformPage() {
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
