import { notFound } from 'next/navigation'
import { rolePages, roleSlugs } from '../data/rolePages'
import { BASE_URL } from '../data/config'
import RoleHero from '../components/RoleHero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import TechnicalHighlights from '../components/TechnicalHighlights'
import Contact from '../components/Contact'

export function generateStaticParams() {
  return roleSlugs.map((role) => ({ role }))
}

export function generateMetadata({ params }) {
  const data = rolePages[params.role]
  if (!data) return {}

  return {
    title: data.title.en,
    description: data.description.en,
    alternates: {
      canonical: `/${data.slugEn}`,
      languages: {
        'en-US': `${BASE_URL}/${data.slugEn}`,
        'es-ES': `${BASE_URL}/es/${data.slugEs}`,
        'x-default': `${BASE_URL}/${data.slugEn}`,
      },
    },
    openGraph: {
      title: data.title.en,
      description: data.description.en,
      url: `${BASE_URL}/${data.slugEn}`,
    },
  }
}

export default function RolePage({ params }) {
  const data = rolePages[params.role]
  if (!data) {
    notFound()
  }

  return (
    <>
      <RoleHero
        authorName="Alejandro Olaso"
        subtitle={data.hero.subtitle.en}
        title={data.hero.title.en}
        description1={data.hero.description1.en}
        description2={data.hero.description2.en}
        locale="en"
      />
      <Experience locale="en" />
      <Skills locale="en" />
      <TechnicalHighlights locale="en" />
      <Contact locale="en" />
    </>
  )
}
