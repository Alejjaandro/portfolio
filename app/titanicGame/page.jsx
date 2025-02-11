import React from 'react'

import TitanicGame from '../../public/assets/projects/titanicPredictorGame.png'
import Image from 'next/legacy/image';
import Link from 'next/link';

import { RiRadioButtonFill } from 'react-icons/ri'

export default function upcomings() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image src={TitanicGame} className='absolute z-1' layout='fill' objectFit='cover' alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Titanic Predictor Game</h2>
                    <h3>Python - Scikit-learn - Numpy - Pandas - SHAP - Machine Learning</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='uppercase text-violet-600'>Titanic Predictor Game</p>
                    <h2 className='my-2'>Overview</h2>
                    <div className='my-2'>
                    This project is a Python-based application that predicts the survival of a fictional passenger aboard the Titanic based on user-provided characteristics.
                        <p className='my-2 font-semibold'>Key Features:</p>
                        <ul className='list-disc list-inside'>
                            <li>Graphical User Interface (GUI): The application provides an easy-to-use GUI for entering passenger details. Users can input passenger characteristics such as class, sex, age, number of siblings/spouses, and number of parents/children.</li>
                            <li>3 different ML models: Gradient Boosting, Random Forest and Tree Decision Classifier.</li>
                            <li>Console area that displays real-time messages, including the steps of the prediction process and any errors encountered.</li>
                            <li>When the user resizes the window, the font size of labels and entry fields adjusts dynamically to ensure an optimal user experience.</li>
                        </ul>
                    </div>
                    <a href='https://github.com/Alejjaandro/machine_learning_supervised_learning' target='_blank' rel='noreferrer'>
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Python
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Scikit-learn
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Numpy
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Pandas
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Machine Learning
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> TKinter
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
