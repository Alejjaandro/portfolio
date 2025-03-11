import React from 'react'
import SkillCard from './SkillCard'

import HTML from '../../public/assets/skills/html.png'
import CSS from '../../public/assets/skills/css.png'
import JS from '../../public/assets/skills/javascript.png'
import ReactJS from '../../public/assets/skills/react.png'
import Angular from '../../public/assets/skills/angular.png'
import NextJS from '../../public/assets/skills/nextjs.png'
import Node from '../../public/assets/skills/node.png'
import Mongo from '../../public/assets/skills/mongo.png'
import MySQL from '../../public/assets/skills/mysql.png'
import Tailwind from '../../public/assets/skills/tailwind.png'
import GitHub from '../../public/assets/skills/github.png'
import Python from '../../public/assets/skills/python.png'
import Django from '../../public/assets/skills/django.png'
import PHP from '../../public/assets/skills/php.png'
import Laravel from '../../public/assets/skills/laravel.png'
import Bootstrap from '../../public/assets/skills/bootstrap.png'


export default function Skills() {
    return (
        <div id='skills' className='w-full px-2 py-24'>

            <div className='max-w-[1440px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl tracking-widest text-violet-600'>Skills</p>
                <h2 className='py-4'>What I Know</h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <SkillCard image={JS} skill='JavaScript'/>
                    <SkillCard image={PHP} skill='PHP'/>
                    <SkillCard image={Python} skill='Python'/>
                    <SkillCard image={ReactJS} skill='ReactJS'/>
                    <SkillCard image={Laravel} skill='Laravel'/>
                    <SkillCard image={NextJS} skill='NextJS'/>
                    <SkillCard image={Angular} skill='Angular'/>
                    <SkillCard image={Node} skill='NodeJS'/>
                    <SkillCard image={Tailwind} skill='TailwindCSS'/>
                    <SkillCard image={Bootstrap} skill='Bootstrap'/>
                    <SkillCard image={Mongo} skill='MongoDB'/>
                    <SkillCard image={MySQL} skill='MySQL'/>
                    <SkillCard image={CSS} skill='CSS'/>
                    <SkillCard image={HTML} skill='HTML'/>
                    <SkillCard image={GitHub} skill='GitHub'/>

                </div>

            </div>
        </div>
    )
}
