import React from 'react'
import CompanyWebImg from '../../public/assets/projects/companyWeb.png'
import Link from 'next/link';
import Image from 'next/image';

import { RiRadioButtonFill } from 'react-icons/ri'

export default function ecommerce() {

    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image src={CompanyWebImg} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Company Web</h2>
                    <h3>Next JS / Tailwind CSS</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='uppercase text-violet-600'>Company Web</p>
                    <h2 className='my-2'>Overview</h2>
                    <div className='my-2'>
                        This is a single-page application project for a company. It&apos;s built with Next JS and Tailwind CSS.
                        <p className='my-2 font-semibold'>Key Features:</p>
                        <ul className='list-disc list-inside'>
                            <li>Responsive design</li>
                            <li>Service Highlight Sections</li>
                            <li>Dynamic Content Areas</li>
                            <li>User-friendly Navigation</li>
                        </ul>
                    </div>
                    <p className='mt-4'>
                        This web template is designed for a professional company that prides itself on a diverse range of services, including consulting, financial advisory, marketing, branding, and project management.
                        The website presents a sleek, modern interface with a clean, corporate aesthetic that conveys the company&apos;s commitment to professionalism and quality.
                    </p>
                    <a href='https://github.com/Alejjaandro/CompanyWeb' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a href='https://alejjaandro-company-web.vercel.app' target='_blank' rel='noreferrer' >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Next JS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> JavaScript
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
