import React from 'react'
import city from "../assets/city.jpg"

const City = () => {
  return (
    <div className='pt-20 w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto my-auto px-5 flex flex-col justify-center items-center md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl font-bold text-white md:text-5xl'>
                        Islamabad
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md text-sm text-justify md:text-md lg:text-lg'>
                    Islamabad is the capital city of Pakistan located within the federal Islamabad Capital Territory. Islamabad is located in the Pothohar Plateau in the northeastern part of the country, between Rawalpindi District and the Margalla Hills National Park to the north. The region has historically been a part of the crossroads of Punjab and Khyber Pakhtunkhwa with the Margalla Pass acting as the gateway between the two regions. Islamabad is a relatively new city, officially becoming capital of Pakistan after the 1960s. 
                    
                    </p>


                </div>
                <div className='mx-auto '>
                    <img src={city} alt="my profile" className='rounded-3xl w-3/4 m-auto  md:w-3/4 ' />
                </div>
                <div>

                </div>
            </div>
        </div>
  )
}

export default City