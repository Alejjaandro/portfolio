'use client'

import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const [sideNavbar, setSideNavbar] = useState(false);
    const [shadow, setShadow] = useState(false);

    // const [navBg, setNavBg] = useState('white');
    // const [linkColor, setLinkColor] = useState('#1f2937');
    // const path = usePathname();


    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) { setShadow(true) } else { setShadow(false) }
        };

        window.addEventListener('scroll', handleShadow);
    }, [])

    const handleSideNavbar = () => setSideNavbar(!sideNavbar)

    return (
        <div className={shadow ? "fixed w-full h-20 shadow-xl z-100 dark:bg-gray-800 dark:shadow-gray-700" : "fixed w-full h-20 z-100"}>
            <div className="flex justify-around items-center w-full h-full px-2 2xl:px-16">
                <ul className="hidden md:flex dark:text-white">
                    <a href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </a>
                    <a href='/#skills'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </a>
                    <a href='/#projects'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </a>
                    <a href='/#contact'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </a>
                </ul>
                <div onClick={handleSideNavbar} className="md:hidden p-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer dark:bg-white">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            {/* ===== SIDE NAVBAR ===== */}
            <div className={sideNavbar ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={
                    sideNavbar
                        ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500 dark:bg-gray-700 dark:text-white"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }>
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleSideNavbar} className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-4 dark:bg-white dark:text-black">
                            <AiOutlineClose size={25} />
                        </div>
                    </div>

                    <div className="border-b border-gray-300 my-4">
                        <h3 className="py-2 text-xl">Alejandro Olaso</h3>
                        <p className="py-2 text-violet-600 dark:text-violet-500">Full Stack Developer</p>
                    </div>

                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <a href='/'>
                                <li className="py-4 text-sm hover:border-b" onClick={() => setSideNavbar(false)}>Home</li>
                            </a>
                            <a href='/#skills'>
                                <li className="py-4 text-sm hover:border-b" onClick={() => setSideNavbar(false)}>Skills</li>
                            </a>
                            <a href='/#projects'>
                                <li className="py-4 text-sm hover:border-b" onClick={() => setSideNavbar(false)}>Projects</li>
                            </a>
                            <a href='/#contact'>
                                <li className="py-4 text-sm hover:border-b" onClick={() => setSideNavbar(false)}>Contact</li>
                            </a>
                        </ul>

                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-violet-600 dark:text-violet-500 mb-4">{"Let's Connect"}</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a href='https://www.linkedin.com/in/alejandro-olaso-fullstackweb/' target='_blank' rel='noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150 dark:bg-violet-500'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a href='https://github.com/Alejjaandro' target='_blank' rel='noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150 dark:bg-violet-500'>
                                        <FaGithub />
                                    </div>
                                </a>

                                <a href="/#sendEmail">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150 dark:bg-violet-500'>
                                        <AiOutlineMail />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
