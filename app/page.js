import About from './components/About'
import Main from './components/Main'
import Navbar from './components/Navbar'
import React from 'react'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function Home() {
    return (
        <React.Fragment>
            <Navbar/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
        </React.Fragment>
    )
}
