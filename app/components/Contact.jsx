import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
import { ui } from '../data/i18n'

export default function Contact({ locale = 'en' }) {
  const t = ui[locale].contact

  return (
    <section id="contact" className="w-full">
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

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:alejandroolasofullstack@gmail.com"
            className="group flex flex-col items-start bg-surface-raised border border-border rounded-xl p-8 hover:border-accent/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
              <AiOutlineMail className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-ink mb-1">{t.email}</h3>
            <p className="text-sm text-ink-muted group-hover:text-accent transition-colors">
              alejandroolasofullstack@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/alejandro-olaso-fullstackweb/"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-start bg-surface-raised border border-border rounded-xl p-8 hover:border-accent/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
              <FaLinkedinIn className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-ink mb-1">{t.linkedin}</h3>
            <p className="text-sm text-ink-muted group-hover:text-accent transition-colors">
              alejandro-olaso-fullstackweb
            </p>
          </a>

          <a
            href="https://github.com/Alejjaandro"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-start bg-surface-raised border border-border rounded-xl p-8 hover:border-accent/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
              <FaGithub className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-ink mb-1">{t.github}</h3>
            <p className="text-sm text-ink-muted group-hover:text-accent transition-colors">
              @Alejjaandro
            </p>
          </a>
        </div>

        <div className="flex justify-center pt-20">
          <Link href={locale === 'es' ? '/es' : '/'}>
            <div className="rounded-full border border-border p-4 cursor-pointer hover:border-accent hover:text-accent transition-colors">
              <HiOutlineChevronDoubleUp className="text-ink-muted" size={24} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
