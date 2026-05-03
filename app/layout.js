import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import ThemeProvider from './components/ThemeProvider'

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
  title: 'Alejandro Olaso | Full-Stack Developer',
  description: 'Full-Stack Developer specialized in Angular, Node.js, B2B platforms, e-commerce, data automation and cloud-native deployments. Experienced in REST APIs, JWT auth, MySQL, MSSQL, AWS S3, TecDoc, Gemini, Pinecone, RAG, CI/CD and Google Cloud Run.',
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
