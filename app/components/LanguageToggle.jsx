'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getOppositeRoleUrl } from '../data/rolePages'
import { getOppositeProjectUrl } from '../data/projectPages'

function getOppositeUrl(pathname) {
  if (!pathname) return '/es'

  // Home EN -> ES
  if (pathname === '/') return '/es'

  // Home ES -> EN
  if (pathname === '/es') return '/'

  // Role pages EN: /full-stack-developer -> /es/desarrollador-full-stack
  const roleMatchEn = pathname.match(/^\/([^/]+)$/)
  if (roleMatchEn) {
    const slug = roleMatchEn[1]
    const opposite = getOppositeRoleUrl(slug, 'en')
    if (opposite && opposite !== `/${slug}`) return opposite
  }

  // Role pages ES: /es/desarrollador-full-stack -> /full-stack-developer
  const roleMatchEs = pathname.match(/^\/es\/([^/]+)$/)
  if (roleMatchEs) {
    const slug = roleMatchEs[1]
    const opposite = getOppositeRoleUrl(slug, 'es')
    if (opposite && opposite !== `/es/${slug}`) return opposite
  }

  // Project pages EN: /projects/b2b-platform -> /es/proyectos/plataforma-b2b
  const projectMatchEn = pathname.match(/^\/projects\/([^/]+)$/)
  if (projectMatchEn) {
    const slug = projectMatchEn[1]
    const opposite = getOppositeProjectUrl(slug, 'en')
    if (opposite && opposite !== `/projects/${slug}`) return opposite
  }

  // Project pages ES: /es/proyectos/plataforma-b2b -> /projects/b2b-platform
  const projectMatchEs = pathname.match(/^\/es\/proyectos\/([^/]+)$/)
  if (projectMatchEs) {
    const slug = projectMatchEs[1]
    const opposite = getOppositeProjectUrl(slug, 'es')
    if (opposite && opposite !== `/es/proyectos/${slug}`) return opposite
  }

  // Fallback: if ES, go to EN home; if EN, go to ES home
  if (pathname.startsWith('/es')) return '/'
  return '/es'
}

export default function LanguageToggle() {
  const pathname = usePathname()
  const oppositeUrl = getOppositeUrl(pathname)
  const isSpanish = pathname?.startsWith('/es')
  const label = isSpanish ? 'EN' : 'ES'

  return (
    <Link
      href={oppositeUrl}
      className="px-2 py-1 rounded-lg bg-surface-raised border border-border text-xs font-bold text-ink-muted hover:text-accent hover:border-accent transition-colors duration-200 uppercase tracking-wider"
      aria-label={`Switch to ${isSpanish ? 'English' : 'Spanish'}`}
    >
      {label}
    </Link>
  )
}
