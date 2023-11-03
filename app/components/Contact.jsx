'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import ContactImg from '../../public/assets/contact.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        await emailjs.sendForm('service_xtxok5v', 'template_tzc9ngf', form.current, 'tPAK-DucuXSK5CXYb')
        .then((result) => {
            console.log(result.text);
            alert('Email sent');
            form.current.reset();
        }, (error) => {console.log(error.text)});

    };

    return (
        <div id='contact' className='w-full'>
            <div className='max-w-[1240px] m-auto px-2 py-24 w-full '>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Contact
                </p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>

                    {/* ===== LEFT SIDE ===== */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt='/' />
                            </div>
                            <div>
                                <h2 className='py-4'>Alejandro Olaso</h2>
                                <p>Full Stack Developer</p>
                                <p className='py-4'>
                                    I am open to any offer. Contact me and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
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

                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== Right Side ===== */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form id='sendEmail' ref={form} onSubmit={(e) => sendEmail(e)} encType='multipart/form-data'>

                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='user_name' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='number' name='user_phone' required />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='user_email' required />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='user_subject' required />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' required />
                                </div>

                                {/* formsubmit options */}
                                <input type="hidden" name="_template" value="table"></input>
                                <input type="hidden" name="_next" value="http://localhost:3000/#contact"></input>

                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>

                            </form>
                        </div>
                    </div>

                </div>

                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-violet-600' size={30} />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
