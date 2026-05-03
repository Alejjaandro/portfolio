import React from 'react'

const studies = [
  {
    id: 'procat',
    role: 'Full-Stack Developer',
    company: 'B2B',
    tagline: 'B2B Automotive Parts Platform',
    summary:
      'Developed and maintained a B2B platform for automotive spare parts, centralizing catalog search, stock validation, carts, quotes, orders and integrations with ERP, TecDoc/TecAlliance, DGT, AWS S3 and external supplier APIs.',
    bullets: [
      'Built full-stack features using Angular 18, Node.js, FeathersJS, MySQL and MSSQL.',
      'Implemented modular REST services for catalog, users, carts, stock, quotes and orders.',
      'Integrated TecDoc/TecAlliance for vehicle, VIN, plate, reference and technical family search.',
      'Developed multi-supplier stock and pricing logic using REST, SOAP and XML integrations.',
      'Implemented JWT authentication, role-based authorization and admin workflows.',
      'Built PDF quote generation and public quote links using templates and backend services.',
      'Configured CI/CD pipelines for Docker image builds and automatic deployment to Google Cloud Run.'
    ],
    tags: [
      'Angular 18',
      'Node.js',
      'FeathersJS',
      'MySQL',
      'MSSQL',
      'JWT',
      'AWS S3',
      'TecDoc',
      'SOAP',
      'CI/CD',
      'Google Cloud Run',
    ],
  },
  {
    id: 'webok',
    role: 'Full-Stack Developer',
    company: 'E-COMMERCE',
    tagline: 'Automotive E-commerce with AI Search',
    summary:
      'Built a modern automotive e-commerce platform with Angular 20 and Node.js/FeathersJS v5, integrating MySQL, PrestaShop data, JWT authentication, cart/checkout flows and an AI assistant powered by Gemini and Pinecone for semantic product search.',
    bullets: [
      'Developed Angular 20 frontend with lazy-loaded routes, resolvers, interceptors, Signals and RxJS.',
      'Built FeathersJS v5 backend services with TypeBox validation, resolvers, hooks and JWT authentication.',
      'Integrated legacy PrestaShop/MySQL data into a modern API contract.',
      'Implemented user account, addresses, cart, checkout, orders and saved vehicles.',
      'Built advanced catalog search with filters by category, brand, price, offer, references and vehicle compatibility.',
      'Designed a RAG architecture for the AI assistant using Pinecone as vector database, combining semantic retrieval with real catalog data.',
      'Configured CI/CD pipelines for Docker builds and automatic deployment to Google Cloud Run.'
    ],
    tags: [
      'Angular 20',
      'Node.js',
      'FeathersJS v5',
      'TypeBox',
      'MySQL',
      'PrestaShop',
      'Gemini',
      'Pinecone',
      'RAG',
      'CI/CD',
      'Google Cloud Run',
    ],
  },
  {
    id: 'okrecambios',
    role: 'Backend & Data Automation Developer',
    company: 'ETL Automatization',
    tagline: 'ETL & Marketplace Integration',
    summary:
      'Developed a Node.js ETL automation system for synchronizing automotive spare parts catalogs across 8+ marketplaces, ingesting supplier files via FTP/SFTP, transforming large datasets, enriching product data with AI/NLP and integrating TecDoc technical data.',
    bullets: [
      'Migrated legacy automation workflows from Python to Node.js 22 with ES Modules.',
      'Built automated ETL pipelines for 10+ suppliers using CSV/XLSX parsing, FTP/SFTP and MySQL batch processing.',
      'Synchronized custom feeds across 8+ marketplaces including Amazon, Miravia, Wallapop and others.',
      'Processed data in 1,000-row batches to improve database responsiveness and avoid locking.',
      'Implemented AI-assisted catalog enrichment using Gemini, DeepSeek, prompt engineering and NLP.',
      'Added structured logging with Winston, Dockerized execution and secure MySQL TLS configuration.',
      'Configured CI/CD pipelines for automated Docker builds and deployment to Google Cloud Run containers.'
    ],
    tags: [
      'Node.js 22',
      'ETL',
      'MySQL',
      'FTP/SFTP',
      'AWS S3',
      'Docker',
      'Gemini',
      'Pinecone',
      'NLP',
      'CI/CD',
      'Google Cloud Run',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Professional Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            Real platforms I have built and maintained in production, handling complex integrations, legacy systems and business-critical workflows.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {studies.map((study, index) => (
            <article
              key={study.id}
              className="group relative bg-surface-raised border border-border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-soft px-3 py-1 rounded-full">
                      {study.company}
                    </span>
                    <span className="text-xs text-ink-faint uppercase tracking-wider">
                      {study.role}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">
                    {study.tagline}
                  </h3>
                </div>
                <span className="text-5xl font-bold text-border group-hover:text-accent/20 transition-colors select-none">
                  0{index + 1}
                </span>
              </div>

              <p className="text-ink-muted leading-relaxed mb-8 max-w-3xl">
                {study.summary}
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {study.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium text-ink-muted bg-surface border border-border rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
