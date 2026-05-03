import { notFound } from 'next/navigation'
import { rolePages, roleSlugs, getRoleByAnySlug } from '../../data/rolePages'
import { BASE_URL } from '../../data/config'
import RoleHero from '../../components/RoleHero'
import Experience from '../../components/Experience'
import Skills from '../../components/Skills'
import TechnicalHighlights from '../../components/TechnicalHighlights'
import Contact from '../../components/Contact'

export function generateStaticParams() {
  return roleSlugs.map((role) => ({ role: rolePages[role].slugEs }))
}

export function generateMetadata({ params }) {
  const result = getRoleByAnySlug(params.role)
  if (!result) return {}
  const { page } = result

  return {
    title: page.title.es,
    description: page.description.es,
    alternates: {
      canonical: `/es/${page.slugEs}`,
      languages: {
        'en-US': `${BASE_URL}/${page.slugEn}`,
        'es-ES': `${BASE_URL}/es/${page.slugEs}`,
        'x-default': `${BASE_URL}/${page.slugEn}`,
      },
    },
    openGraph: {
      title: page.title.es,
      description: page.description.es,
      url: `${BASE_URL}/es/${page.slugEs}`,
    },
  }
}

export default function RolePageEs({ params }) {
  const result = getRoleByAnySlug(params.role)
  if (!result) {
    notFound()
  }
  const { page } = result

  return (
    <>
      <RoleHero
        authorName="Alejandro Olaso"
        subtitle={page.hero.subtitle.es}
        title={page.hero.title.es}
        description1={page.hero.description1.es}
        description2={page.hero.description2.es}
        locale="es"
      />
      <Experience locale="es" />
      <Skills locale="es" />
      <TechnicalHighlights locale="es" />
      <Contact locale="es" />
    </>
  )
}
