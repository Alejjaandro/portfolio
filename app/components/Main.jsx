import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

const stats = [
  { value: '2 yrs', label: 'Full-stack production experience' },
  { value: '3+', label: 'Professional platforms shipped' },
  { value: '8+', label: 'Marketplaces integrated' },
  { value: 'AI/RAG', label: 'Vector database assistant architecture' },
]

export default function Main() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center pt-20">
      <div className="max-w-[1240px] w-full mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Full-Stack Developer · Angular · Node.js · Cloud · AI
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-ink leading-[1.1] tracking-tight">
            Alejandro
            <br />
            <span className="text-ink-muted">Olaso</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl">
            I build business-critical systems that connect frontend, backend, databases and external services.
            Specialized in <strong className="text-ink">Angular</strong>, <strong className="text-ink">Node.js</strong>,{' '}
            <strong className="text-ink">B2B platforms</strong>, <strong className="text-ink">automotive e-commerce</strong> and{' '}
            <strong className="text-ink">data automation</strong>.
          </p>

          <p className="mt-5 text-base md:text-lg text-ink-muted leading-relaxed max-w-2xl">
            I have worked on <strong className="text-ink">production platforms</strong> involving{' '}
            <strong className="text-ink">ERP integrations</strong>, TecDoc/TecAlliance data, JWT authentication,
            <strong className="text-ink"> CI/CD pipelines</strong>,{' '}
            <strong className="text-ink">Google Cloud Run deployments</strong>, ETL workflows and AI assistants powered by{' '}
            <strong className="text-ink">RAG architectures with Pinecone</strong>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
            >
              View Case Studies
            </a>
            <a
              href="mailto:alejandroolasofullstack@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-ink-muted font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              <AiOutlineMail />
              Get in Touch
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-accent pl-6">
                <p className="text-3xl font-bold text-ink">{stat.value}</p>
                <p className="text-sm text-ink-faint mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
