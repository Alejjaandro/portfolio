import React from 'react'

const skillGroups = [
  {
    category: 'Frontend',
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
    category: 'Backend',
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
    category: 'Databases',
    items: [
      'MySQL',
      'MSSQL',
      'MongoDB',
      'PrestaShop data model',
    ],
  },
  {
    category: 'Integrations',
    items: [
      'TecDoc / TecAlliance',
      'ERP integrations',
      'SOAP / REST',
      'AWS S3',
      'FTP / SFTP',
    ],
  },
  {
    category: 'Data & AI',
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
    category: 'DevOps',
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

export default function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Technical Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Tools & Technologies
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            Technologies I use to design, build and ship production-grade systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-surface-raised border border-border rounded-xl p-6 transition-colors hover:border-accent/20"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                {group.category}
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
