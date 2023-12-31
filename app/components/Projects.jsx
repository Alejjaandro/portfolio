import React from 'react'

import ecommerce from '../../public/assets/projects/ecommerce.png'
import upcomings from '../../public/assets/projects/upcomings.png'
import spotifyClone from '../../public/assets/projects/spotify-clone.png'
import pricetracker from '../../public/assets/projects/pricetracker.png'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1440px] mx-auto px-2 py-24'>

            <p className='text-xl tracking-widest uppercase text-violet-600'>Projects</p>
            <h2 className='py-4'>{"What I've Built"}</h2>

            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title='Ecommerce App' image={ecommerce} skills='React - Node - Express - MongoDB' projectUrl='/ecommerce'/>
                <ProjectItem title='Upcomings Page' image={upcomings} skills='React and Bootstrap' projectUrl='/upcomings'/>
                <ProjectItem title='Spotify Clone' image={spotifyClone} skills='Angular and Node' projectUrl='/spotifyClone'/>
                <ProjectItem title='Price Tracker' image={pricetracker} skills='Next - Tailwind - Node - MongoDB' projectUrl='/pricetracker'/>

            </div>

        </div>
    </div>
  )
}
