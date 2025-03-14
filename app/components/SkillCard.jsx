import Image from "next/legacy/image"
import React from 'react'

function SkillCard({image, skill}) {
    return (
        <div className='p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-blue-950 dark:shadow-cyan-900'>
            <div className='grid grid-cols-2 gap-4 items-center dark:text-gray-700'>
                <div className='m-auto'>
                    <Image src={image} alt='/' width={70} height={70} />
                </div>
                <div className=''>
                    <h3>{skill}</h3>
                </div>
            </div>
        </div>
    )
}

export default SkillCard