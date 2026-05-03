import React from 'react'

export const highlightTerms = {
  en: [
    'Angular',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'FeathersJS',
    'Express',
    'REST APIs',
    'JWT authentication',
    'MySQL',
    'RxJS',
    'Signals',
    'lazy loading',
    'B2B platforms',
    'e-commerce',
    'automotive e-commerce',
    'cloud deployments',
    'Google Cloud Run',
    'CI/CD',
    'ETL',
    'AI assistants',
    'AI assistant',
    'AI assistant workflows',
    'AI-powered',
    'RAG-based AI assistant',
    'RAG architecture',
    'RAG architectures',
    'RAG-based',
    'AI-generated responses',
    'AI-powered product search',
    'AI-powered product recommendations',
    'catalog-grounded AI responses',
    'Pinecone',
    'Vector database',
    'production platforms',
    'ERP integrations',
  ],
  es: [
    'Angular',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'FeathersJS',
    'Express',
    'APIs REST',
    'autenticación JWT',
    'MySQL',
    'RxJS',
    'Signals',
    'lazy loading',
    'plataformas B2B',
    'e-commerce',
    'e-commerce de recambios de automoción',
    'despliegues cloud',
    'Google Cloud Run',
    'CI/CD',
    'ETL',
    'asistentes de IA',
    'asistente de IA',
    'flujos de asistentes de IA',
    'asistente de IA basado en RAG',
    'IA generativa',
    'respuestas generadas por IA',
    'arquitectura RAG',
    'arquitecturas RAG',
    'RAG basado',
    'Pinecone',
    'base de datos vectorial',
    'búsqueda de productos con IA',
    'búsqueda de productos con RAG',
    'recomendaciones de producto impulsadas por IA',
    'respuestas de IA basadas en catálogo real',
    'plataformas en producción',
    'integraciones ERP',
  ],
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default function HighlightedText({ text, locale = 'en' }) {
  const terms = highlightTerms[locale]
  if (!terms || terms.length === 0) return text

  // Ordenar de más largo a más corto para que frases completas
  // se procesen antes que sus posibles substrings.
  const sortedTerms = [...terms].sort((a, b) => b.length - a.length)

  let result = [text]

  sortedTerms.forEach((term) => {
    const newResult = []
    const escaped = escapeRegex(term)
    const regex = new RegExp(`\\b(${escaped})\\b`, 'gi')

    result.forEach((part) => {
      if (typeof part !== 'string') {
        newResult.push(part)
        return
      }

      const parts = part.split(regex)
      parts.forEach((p, i) => {
        if (p.toLowerCase() === term.toLowerCase()) {
          newResult.push(
            <strong key={`${term}-${i}`} className="text-ink">
              {p}
            </strong>
          )
        } else {
          newResult.push(p)
        }
      })
    })
    result = newResult
  })

  return <>{result}</>
}
