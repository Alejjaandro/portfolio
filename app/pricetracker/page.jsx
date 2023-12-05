import React from 'react'

import PriceTracker from '../../public/assets/projects/pricetracker.png'
import Image from 'next/legacy/image';
import Link from 'next/link';

import { RiRadioButtonFill } from 'react-icons/ri'

export default function pricetracker() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image src={PriceTracker} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Price Tracker Web</h2>
                    <h3>Next / Node / MongoDB</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='uppercase text-violet-600'>Price Tracker Web</p>
                    <h2 className='my-2'>Overview</h2>
                    <div className='my-2'>
                        <p className='my-2'>
                            This is a web that scrape products from Amazon and keeps you posted of their price changes.
                            <br />
                            It was made with NextJS, NodeJS and MongoDB.
                        </p>
                        <p className='my-2'>
                            Functionalities:
                            <br />
                            <ol className='list-decimal ml-8'>
                                <li>Enter the URL of a product in the search field and it will render the product info at the bottom of the page</li>
                                <li>Send email to keep you posted about price changes in a product</li>
                                <li>Store scraped products in a Database</li>
                            </ol>
                        </p>              
                    </div>
                    <a href='https://github.com/Alejjaandro/pricetracker' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a href='https://alejjaandro-pricetracker.vercel.app' target='_blank' rel='noreferrer' >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Next
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Node
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
    )
}
