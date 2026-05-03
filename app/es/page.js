import Main from '../components/Main'
import React from 'react'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import TechnicalHighlights from '../components/TechnicalHighlights'
import Contact from '../components/Contact'
import { BASE_URL } from '../data/config'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Alejandro Olaso',
    jobTitle: 'Desarrollador Full-Stack',
    url: `${BASE_URL}/es`,
    sameAs: [
      'https://www.linkedin.com/in/alejandro-olaso-fullstackweb/',
      'https://github.com/Alejjaandro',
    ],
    knowsAbout: [
      'Angular',
      'Node.js',
      'React',
      'Next.js',
      'TypeScript',
      'FeathersJS',
      'MySQL',
      'REST APIs',
      'JWT Auth',
      'CI/CD',
      'Google Cloud Run',
      'B2B platforms',
      'E-commerce',
      'Data automation',
      'TecDoc',
      'Pinecone',
      'RAG',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Contractor',
    },
  },
}

export default function HomeEs() {
  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Main locale="es" />
      <Experience locale="es" />
      <Skills locale="es" />
      <TechnicalHighlights locale="es" />
      <Contact locale="es" />
    </React.Fragment>
  )
}
