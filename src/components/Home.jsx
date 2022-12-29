import React from 'react'
import saadmalik from "../assets/saadmalik.jpg"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto my-auto px-5 flex flex-col justify-center items-center md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl font-bold text-white md:text-7xl'>
                        I'm a Computer Engineer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md text-sm md:text-lg'>
                        I am a Computer Engineer with a passion for programming and web development. I am currently studying at the University of Engineering and Technology, Taxila. I have worked on many projects and have gained a lot of experience in the field of web development.
                    </p>
                    <div className='self-center md:self-start'>
                        <Link to = '/projects'>
                        <button className='px-2 py-1 my-4 w-fit bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center text-white  rounded-md md:px-3 md:py-3'>
                            Projects
                            <span>
                                <IoIosArrowForward />
                            </span>

                        </button></Link>
                    </div>

                </div>
                <div className='mx-auto'>
                    <img src={saadmalik} alt="my profile" className='rounded-3xl w-2/4 m-auto  md:w-3/4 '/>
                </div>
            <div>

                </div>
            </div>
        </div>
    )
}

export default Home