import React from 'react'
import school from "../assets/school.jpg"

const School = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto my-auto px-5 flex flex-col justify-center items-center md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl font-bold text-white md:text-5xl'>
                        My School
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md text-sm text-justify md:text-md lg:text-lg'>
                    IMCB F8/4 initially started as an English medium secondary school in 1978. It was elevated to college level in 1984. As a center of excellence, the college offers education from class 1 to higher secondary school level in various disciplines.
                    </p>


                </div>
                <div className='mx-auto'>
                    <img src={school} alt="my profile" className='rounded-3xl w-2/4 m-auto  md:w-3/4 ' />
                </div>
                <div>

                </div>
            </div>
        </div>
  )
}

export default School