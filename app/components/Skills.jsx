import React from 'react'
import { ui } from '../data/i18n'

const skillGroups = [
  {
    category: { en: 'Frontend', es: 'Frontend' },
    items: [
      'Angular 18 / 20',
      'Angular Signals',
      'RxJS',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    category: { en: 'Backend', es: 'Backend' },
    items: [
      'Node.js',
      'FeathersJS',
      'Express',
      'REST APIs',
      'Socket.IO',
      'JWT Auth',
      'TypeBox',
      'Knex.js',
    ],
  },
  {
    category: { en: 'Databases', es: 'Bases de Datos' },
    items: [
      'MySQL',
      'MongoDB',
      'PrestaShop data model',
    ],
  },
  {
    category: { en: 'Integrations', es: 'Integraciones' },
    items: [
      'TecDoc / TecAlliance',
      'ERP integrations',
      'SOAP / REST',
      'AWS S3',
      'FTP / SFTP',
    ],
  },
  {
    category: { en: 'Data & AI', es: 'Datos e IA' },
    items: [
      'ETL pipelines',
      'Batch processing',
      'Gemini',
      'Pinecone',
      'RAG architecture',
      'Vector databases',
      'NLP',
      'Prompt engineering',
    ],
  },
  {
    category: { en: 'DevOps', es: 'DevOps' },
    items: [
      'Docker',
      'Docker Compose',
      'Google Cloud Run',
      'CI/CD',
      'Container deployments',
      'Winston logging',
      'Environment configuration',
      'Git',
    ],
  },
]

export default function Skills({ locale = 'en' }) {
  const t = ui[locale].skills

  return (
    <section id="skills" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            {t.sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
            {t.heading}
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category[locale]}
              className="bg-surface-raised border border-border rounded-xl p-6 transition-colors hover:border-accent/20"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                {group.category[locale]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 text-sm text-ink-muted bg-surface border border-border rounded-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
