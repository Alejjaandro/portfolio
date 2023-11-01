import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Main() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='text-2xl md:text-4xl xl:text-5xl py-4 text-gray-700'>
                        {"Hi, I'm "}<span className='text-violet-600'>Alejandro</span>
                    </h1>
                    <h1 className='text-2xl md:text-4xl xl:text-5xl py-2 text-gray-700'>
                        A Full Stack Web Developer
                    </h1>
                    <p className='hidden md:inline-block xl:text-xl py-4 text-gray-600 max-w-[70%] m-auto'>
                        {"I'm "} a Junior <strong>Full Stack Developer</strong> passionate about creating dynamic and user-friendly web applications.
                    </p>
                    <p className='text-sm md:text-base xl:text-xl py-2 text-gray-600 max-w-[70%] m-auto'>
                        With a solid foundation in both front-end and back-end development, I have hands-on experience with technologies such as <strong>HTML, CSS, JavaScript</strong>, and have worked with frameworks like <strong>React, Node.js, Angular, Tailwind and Bootstrap</strong>. I am also proficient in database design and implementation.
                    </p>
                    <p className='text-sm md:text-base xl:text-xl py-2 text-gray-600 max-w-[70%] m-auto'>
                        I am a <strong>quick learner</strong>, a <strong>problem solver</strong>, and a <strong>dedicated team player</strong> who thrives in a collaborative environment.
                    </p>
                    <p className='hidden md:inline-block xl:text-xl py-2 text-gray-600 max-w-[70%] m-auto'>
                        My goal is to continuously expand my knowledge and take on new challenges to help build innovative and efficient web solutions. I am eager to contribute my skills to your team and grow as a Full Stack Developer.
                    </p>

                    <div className="flex items-center justify-around max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
