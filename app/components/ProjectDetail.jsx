import React from 'react'

export default function ProjectDetail({ company, role, tagline, summary, bullets, tags }) {
  return (
    <section className="w-full min-h-[60vh] flex items-center pt-20">
      <div className="max-w-[1240px] w-full mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent-soft px-3 py-1 rounded-full">
              {company}
            </span>
            <span className="text-xs text-ink-faint uppercase tracking-wider">{role}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">{tagline}</h1>
          <p className="mt-6 text-lg text-ink-muted leading-relaxed">{summary}</p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-8">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium text-ink-muted bg-surface border border-border rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
