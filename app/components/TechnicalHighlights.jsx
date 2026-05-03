import React from 'react'
import { ui } from '../data/i18n'

const highlights = {
  en: [
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
      desc: 'Designing AI assistant workflows using Pinecone vector search, AI-generated responses and business data enrichment.',
    },
    {
      title: 'Cloud-Native Deployments',
      desc: 'Building CI/CD workflows for containerized services deployed automatically to Google Cloud Run.',
    },
  ],
  es: [
    {
      title: 'Arquitectura de Servicios',
      desc: 'Diseñando servicios FeathersJS modulares con hooks, resolvers y separación limpia de responsabilidades.',
    },
    {
      title: 'Integración de Sistemas Legacy',
      desc: 'Adaptando bases de datos PrestaShop y ERP a contratos API modernos sin romper sistemas existentes.',
    },
    {
      title: 'Autenticación y Seguridad',
      desc: 'Implementando autenticación JWT, control de acceso basado en roles y gestión segura de sesiones.',
    },
    {
      title: 'Frontend Reactivo',
      desc: 'Gestionando estado complejo con Angular Signals, streams RxJS y servicios reactivos.',
    },
    {
      title: 'Arquitectura RAG',
      desc: 'Diseñando flujos de asistentes de IA usando búsqueda vectorial con Pinecone, respuestas generadas por IA y enriquecimiento de datos de negocio.',
    },
    {
      title: 'Despliegues Cloud-Native',
      desc: 'Construyendo flujos CI/CD para servicios containerizados desplegados automáticamente en Google Cloud Run.',
    },
  ],
}

export default function TechnicalHighlights({ locale = 'en' }) {
  const t = ui[locale].highlights

  return (
    <section id="highlights" className="w-full">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights[locale].map((item, i) => (
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
