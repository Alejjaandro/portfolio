'use client'

import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Case Studies', href: '/#experience' },
  { label: 'Stack', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [sideNavbar, setSideNavbar] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setSideNavbar(false)
  }, [path])

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full h-20 px-6 max-w-[1440px] mx-auto">
        <a href="/" className="text-lg font-bold tracking-tight text-ink">
          Alejandro Olaso
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-muted hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-4 border-l border-border">
            <a
              href="https://github.com/Alejjaandro"
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-olaso-fullstackweb/"
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="mailto:alejandroolasofullstack@gmail.com"
              className="text-ink-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <AiOutlineMail size={18} />
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setSideNavbar(!sideNavbar)}
            className="p-2 text-ink-muted"
            aria-label="Toggle menu"
          >
            {sideNavbar ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-surface z-[90] transition-transform duration-300 ${
          sideNavbar ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setSideNavbar(false)}
              className="text-2xl font-medium text-ink hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-6 pt-8">
            <a
              href="https://github.com/Alejjaandro"
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-accent transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-olaso-fullstackweb/"
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-accent transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="mailto:alejandroolasofullstack@gmail.com"
              className="text-ink-muted hover:text-accent transition-colors"
            >
              <AiOutlineMail size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
