import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { ui } from '../data/i18n'
import HighlightedText from './HighlightedText'

export default function RoleHero({ subtitle, title, description1, description2, authorName, locale = 'en' }) {
  const t = ui[locale].main

  return (
    <section id="home" className="w-full min-h-[60vh] flex items-center pt-20">
      <div className="max-w-[1240px] w-full mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">{subtitle}</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-ink leading-[1.1] tracking-tight">
            {authorName && <span className="block">{authorName}</span>}
            <span className={authorName ? "block text-ink-muted text-3xl sm:text-4xl md:text-5xl mt-2" : "block"}>{title}</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl">
            <HighlightedText text={description1} locale={locale} />
          </p>

          {description2 && (
            <p className="mt-5 text-base md:text-lg text-ink-muted leading-relaxed max-w-2xl">
              <HighlightedText text={description2} locale={locale} />
            </p>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
            >
              {t.ctaViewCaseStudies}
            </a>
            <a
              href="mailto:alejandroolasofullstack@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-ink-muted font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              <AiOutlineMail />
              {t.ctaGetInTouch}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.stats.map((stat, i) => (
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
