import React from 'react'
import village from "../assets/village.jpg"

const Village = () => {
  return (
    <div className='pt-20 w-full h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto my-auto px-5 flex flex-col justify-center items-center md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl font-bold text-white md:text-5xl'>
                        Tret, Murree
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md text-sm text-justify md:text-md lg:text-lg'>
                    Tret is a village and union council of Murree Tehsil in the Murree District of Punjab, Pakistan. It is located in the south of the tehsil at 33°49′60″N 73°16′60″E and is bounded to the north by Khyber Pakhtunkhwa, to the north-east by Ghora Gali, to the east by Numbal and to the south by Angoori. During the British rule, Tret housed a few army installations and a Dak Bungalow

According to the 1998 census of Pakistan it had a population of 14,184.
                    
                    </p>


                </div>
                <div className='mx-auto '>
                    <img src={village} alt="my profile" className='rounded-3xl w-3/4 m-auto  md:w-3/4 ' />
                </div>
                <div>

                </div>
            </div>
        </div>
  )
}

export default Village