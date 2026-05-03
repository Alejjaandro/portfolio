import Main from './components/Main'
import React from 'react'
import Experience from './components/Experience'
import Skills from './components/Skills'
import TechnicalHighlights from './components/TechnicalHighlights'
import Contact from './components/Contact'

export default function Home() {
    return (
        <React.Fragment>
            <Main/>
            <Experience/>
            <Skills/>
            <TechnicalHighlights/>
            <Contact/>
        </React.Fragment>
    )
}
