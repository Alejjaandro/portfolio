'use client'

import React from 'react'
import { useTheme } from './ThemeProvider'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-lg bg-surface-raised border border-border text-ink-muted hover:text-accent hover:border-accent transition-colors duration-200 shadow-none'
      aria-label='Toggle dark mode'
    >
      {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  )
}
