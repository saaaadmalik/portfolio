import React from 'react'
import college from '../assets/college.jpg'

const College = () => {
    return (
        <div className='pt-20 w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto my-auto px-5 flex flex-col justify-center items-center md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl font-bold text-white md:text-5xl'>
                        My College
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md text-sm text-justify md:text-md lg:text-lg'>
                        Since 1985, Punjab Group of Colleges (PGC) has successfully established the largest quality education network in the private sector across Pakistan. The Group, as a progressive institute includes 3 chartered universities, 417 colleges, 15 Resource Academia Campuses, 1075 Allied Schools, and 425 EFA Schools.

                        We provide top quality education from Playgroup to Ph.D which allows a complete career path for every student.
                    </p>


                </div>
                <div className='mx-auto'>
                    <img src={college} alt="my profile" className='rounded-3xl w-2/4 m-auto  md:w-3/4 ' />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default College

