import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import ThemeProvider from './components/ThemeProvider'
import { BASE_URL } from './data/config'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Alejandro Olaso | Full-Stack Developer',
    template: '%s | Alejandro Olaso',
  },
  description: 'Full-Stack Developer specialized in Angular, Node.js, B2B platforms, e-commerce, data automation and cloud-native deployments. Experienced in REST APIs, JWT auth, MySQL, AWS S3, TecDoc, Gemini, Pinecone, RAG, CI/CD and Google Cloud Run.',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': `${BASE_URL}/es`,
      'x-default': `${BASE_URL}/`,
    },
  },
  openGraph: {
    title: 'Alejandro Olaso | Full-Stack Developer',
    description: 'Full-Stack Developer specialized in Angular, Node.js, B2B platforms, e-commerce, data automation and cloud-native deployments.',
    url: BASE_URL,
    siteName: 'Alejandro Olaso Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alejandro Olaso - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Olaso | Full-Stack Developer',
    description: 'Full-Stack Developer specialized in Angular, Node.js, B2B platforms, e-commerce, data automation and cloud-native deployments.',
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
  keywords: ['Full-Stack Developer', 'Angular Developer', 'Node.js Developer', 'Frontend Developer', 'Backend Developer', 'Web Developer', 'React', 'Next.js', 'TypeScript', 'FeathersJS', 'MySQL', 'REST APIs', 'JWT Auth', 'CI/CD', 'Google Cloud Run', 'B2B platforms', 'E-commerce', 'Data automation', 'TecDoc', 'Pinecone', 'RAG'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="font-body">
        <ThemeProvider>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
