import { BASE_URL } from '../data/config'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Alejandro Olaso | Desarrollador Full-Stack',
    template: '%s | Alejandro Olaso',
  },
  description: 'Desarrollador Full-Stack especializado en Angular, Node.js, plataformas B2B, e-commerce, automatización de datos y despliegues cloud-native. Experiencia en APIs REST, JWT auth, MySQL, AWS S3, TecDoc, Gemini, Pinecone, RAG, CI/CD y Google Cloud Run.',
  alternates: {
    canonical: '/es',
    languages: {
      'en-US': `${BASE_URL}/`,
      'x-default': `${BASE_URL}/`,
    },
  },
  openGraph: {
    title: 'Alejandro Olaso | Desarrollador Full-Stack',
    description: 'Desarrollador Full-Stack especializado en Angular, Node.js, plataformas B2B, e-commerce, automatización de datos y despliegues cloud-native.',
    url: `${BASE_URL}/es`,
    siteName: 'Alejandro Olaso Portfolio',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alejandro Olaso - Portfolio de Desarrollador Full-Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Olaso | Desarrollador Full-Stack',
    description: 'Desarrollador Full-Stack especializado en Angular, Node.js, plataformas B2B, e-commerce, automatización de datos y despliegues cloud-native.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: 'Alejandro Olaso Portfolio',
  authors: [{ name: 'Alejandro Olaso', url: BASE_URL }],
  keywords: ['Desarrollador Full-Stack', 'Desarrollador Angular', 'Desarrollador Node.js', 'Desarrollador Frontend', 'Desarrollador Backend', 'Desarrollador Web', 'React', 'Next.js', 'TypeScript', 'FeathersJS', 'MySQL', 'APIs REST', 'JWT Auth', 'CI/CD', 'Google Cloud Run', 'Plataformas B2B', 'E-commerce', 'Automatización de datos', 'TecDoc', 'Pinecone', 'RAG'],
}

export default function EsLayout({ children }) {
  return children
}
