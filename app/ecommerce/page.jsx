import React from 'react'
import ecommerceImg from '../../public/assets/projects/ecommerce.png'
import Image from 'next/image';
import Link from 'next/link';

import { RiRadioButtonFill } from 'react-icons/ri'

export default function ecommerce() {

    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image src={ecommerceImg} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Ecommerce App</h2>
                    <h3>React JS, Vite & Redux Toolkit / Tailwind / NodeJS / Express / MongoDB</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='uppercase text-violet-600'>Ecommerce App</p>
                    <h2 className='my-2'>It&apos;s my largest project to date.
</h2>
                    <div className='my-2'>
                        This is a fully functional Full-Stack Ecommerce project that provides:
                        <ul className='mx-4 list-disc'>
                            <li className='m-1 cursor-auto'>Full front-end and back-end development, as well as the design and implementation of the database.</li>
                            <li className='m-1 cursor-auto'>Complete user management with registration and login functionalities, and update of user account info.</li>
                            <li className='m-1 cursor-auto'>CRUD operations on multiple models.</li>
                            <li className='m-1 cursor-auto'>Implementation of a REST API to facilitate communication between different parts of the application.</li>
                            <li className='m-1 cursor-auto'>Complex state management.</li>
                        </ul>
                    </div>
                    <p className='mt-4'>
                        It allows users to browse products, add them to the cart, and make purchases, as well as manage their account information.
                        The user cart is stored in the database, so the user can log in from different devices and still have access to the same cart and order history.
                    </p>

                    <a href='https://github.com/Alejjaandro/ecommerce-MERN/' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a href='https://tech-ecommerce-frontend.vercel.app/' target='_blank' rel='noreferrer' >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Vite
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Redux Toolkit
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Node
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> JavaScript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Express
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> MongoDB
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
}; 
