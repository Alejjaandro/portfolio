import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Main() {
    return (
        <div id='home' className='w-full h-screen text-center pt-24'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl py-4 text-gray-700'>
                        {"Hi, I'm "}<span className='text-violet-600'>Alejandro</span>
                    </h1>
                    <h1 className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl py-2 text-gray-700'>
                        A Full Stack Web Developer
                    </h1>
                    <p className='hidden md:inline-block xl:text-lg py-4 text-gray-600 max-w-[70%] m-auto'>
                        {"I'm "} a Junior <strong>Full Stack Developer</strong> passionate about creating dynamic and user-friendly web applications.
                    </p>
                    <p className='text-sm md:text-base xl:text-lg py-2 text-gray-600 max-w-[70%] m-auto'>
                        With a solid foundation in both front-end and back-end development, I have hands-on experience with technologies such as <strong>JavaScript, PHP and Python</strong>, and have worked with frameworks like <strong>React, Node.js, Laravel, Angular, Tailwind and Bootstrap</strong>. 
                        I am also proficient in database design and implementation, mainly with <strong>MySQL and MongoDB</strong>.
                    </p>
                    <p className='text-sm md:text-base xl:text-lg py-2 text-gray-600 max-w-[70%] m-auto'>
                        I am a <strong>quick learner</strong>, a <strong>problem solver</strong>, and a <strong>dedicated team player</strong> who thrives in a collaborative environment.
                    </p>
                    <p className='hidden md:inline-block xl:text-lg py-2 text-gray-600 max-w-[70%] m-auto'>
                        My goal is to continuously expand my knowledge and take on new challenges to help build innovative and efficient web solutions. I am eager to contribute my skills to your team and grow as a Full Stack Developer.
                    </p>
                    <p>
                        <a href="#projects" className="xl:text-lg py-2 text-violet-600 underline cursor-pointer">
                            Checkout my lastest projects
                        </a>
                    </p>

                    <div className='flex items-center justify-around max-w-[330px] m-auto py-6'>
                        <a href='https://www.linkedin.com/in/alejandro-olaso-fullstackweb/' target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href='https://github.com/Alejjaandro' target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>

                        <a href="/#sendEmail">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
