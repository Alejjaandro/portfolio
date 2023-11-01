import About from './components/About'
import Main from './components/Main'
import Navbar from './components/Navbar'
import React from 'react'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
    return (
        <React.Fragment>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </React.Fragment>
    )
}
