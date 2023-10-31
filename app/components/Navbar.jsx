import Image from "next/image";
import React from "react";
import Link from "next/link";
import navLogo from '../../public/assets/navLogo.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Navbar() {
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image src={navLogo} alt="/" width={70} height={0} />
                <div>
                    <ul className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
                <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500">
                    <div className="flex w-full items-center justify-between">
                        <Image src={navLogo} alt="/" width={70} height={0} />
                        <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-4">
                            <AiOutlineClose size={25} />
                        </div>
                    </div>

                    <div className="border-b border-gray-300 my-4">
                        <p className="py-2">Full Stack Developer</p>
                    </div>

                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href='/'>
                                <li className="py-4 text-sm hover:border-b">Home</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm hover:border-b">About</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm hover:border-b">Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm hover:border-b">Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm hover:border-b">Contact</li>
                            </Link>
                        </ul>

                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-violet-600 mb-4">{"Let's Connect"}</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125">
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
