import React from 'react'

const highlights = [
  {
    title: 'Service Architecture',
    desc: 'Designing modular FeathersJS services with hooks, resolvers and clean separation of concerns.',
  },
  {
    title: 'Legacy Integration',
    desc: 'Adapting PrestaShop and ERP databases into modern API contracts without breaking existing systems.',
  },
  {
    title: 'Auth & Security',
    desc: 'Implementing JWT authentication, role-based access control and secure session management.',
  },
  {
    title: 'Reactive Frontend',
    desc: 'Managing complex state with Angular Signals, RxJS streams and reactive services.',
  },
  {
    title: 'RAG Architecture',
    desc: 'Designing AI assistant workflows using Pinecone vector search, semantic retrieval and business data enrichment.',
  },
  {
    title: 'Cloud-Native Deployments',
    desc: 'Building CI/CD workflows for containerized services deployed automatically to Google Cloud Run.',
  },
]

export default function TechnicalHighlights() {
  return (
    <section id="highlights" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Interview Topics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Technical Highlights
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            Topics I can confidently discuss in depth during technical interviews.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group bg-surface-raised border border-border rounded-xl p-6 hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                <span className="text-accent font-bold text-sm">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
