import Image from 'next/image'
import React from 'react'

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

export default function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen px-2 py-24'>

            <div className='max-w-[1240xp] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl tracking-widest text-violet-600'>Skills</p>
                <h2 className='py-4'>What I Know</h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={JS} alt='/' width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Node} alt='/' width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>Node.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ReactJS} alt='/' width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>React.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Angular} alt='/' width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>Angular</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={NextJS} alt='/' width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={HTML} alt='/' width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={CSS} alt='/'  width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Tailwind} alt='/' width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Mongo} alt='/'  width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={MySQL} alt='/'  width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>MySQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={GitHub} alt='/' width={64} height={64}/>
                            </div>
                            <div className=''>
                                <h3>GitHub</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
