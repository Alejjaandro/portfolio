import React from 'react'

import RentingWeb from '../../public/assets/projects/rentingWeb.png'
import Image from "next/legacy/image";
import Link from 'next/link';

import { RiRadioButtonFill } from 'react-icons/ri'

export default function upcomings() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image src={RentingWeb} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Renting Web</h2>
                    <h3>React JS / SASS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='uppercase text-violet-600'>Renting Web</p>
                    <h2 className='my-2'>Overview</h2>
                    <div className='my-2'>
                        This is a single-page application project for a properties renting web. It&apos;s built with React JS and SASS.
                        <p className='my-2 font-semibold'>Key Features:</p>
                        <ul className='list-disc list-inside'>
                            <li>Responsive design</li>
                            <li>Login and Register</li>
                            <li>Functional map</li>
                            <li>User-friendly Navigation</li>
                        </ul>
                    </div>
                    <a href='https://github.com/Alejjaandro/rentingWeb' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a href='https://alejjaandro-rentingweb.vercel.app' target='_blank' rel='noreferrer' >
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
                                <RiRadioButtonFill className='pr-1' /> SASS
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    )
}
