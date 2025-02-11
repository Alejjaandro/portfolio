import React from 'react'

import spotifyClone from '../../public/assets/projects/spotifyClone.png'
import Image from 'next/legacy/image';
import Link from 'next/link';

import { RiRadioButtonFill } from 'react-icons/ri'

export default function upcomings() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image src={spotifyClone} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Spotify Clone Interface</h2>
                    <h3>Angular / Node</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='uppercase text-violet-600'>Spotify clone Interface</p>
                    <h2 className='my-2'>Overview</h2>
                    <div className='my-2'>
                        <p className='my-2'>
                            This is a clone of the Spotify interface made with Angular in the front-end, and Node for the backend.
                        </p>
                        <p className='my-2'>
                            It has a log in functionality, the credentials to enter are: 
                            <br />
                            <br />
                            Email: <span className='text-violet-600'>test@test.com</span>
                            <br />
                            Password: <span className='text-violet-600'>12345678</span>
                        </p>
                        <p className='my-2'>
                            The songs are render after a GET petition to the backend and it has many functionalities:
                            <br />
                            <ol className='list-decimal ml-8'>
                                <li>Search for songs</li>
                                <li>Add to favorites</li>
                                <li>Pause and Start songs</li>
                                <li>Move song time forward and backward</li>
                            </ol>
                        </p>              
                    </div>
                    <a href='https://github.com/Alejjaandro/spotifyClone' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a href='https://alejjaandro-spotify-clone.vercel.app' target='_blank' rel='noreferrer' >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Angular
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Node
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
