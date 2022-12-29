import React from 'react'


const About = () => {
    return (
        <div className='pt-20 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center max-w-screen-lg '>
                <div className='mb-5'>
                    <p className='text-3xl font-bold text-white cursor-pointer border-b-4 border-gray-500  md:text-5xl'>About me</p>
                </div>
                <p className='text-gray-400 px-3 mx-5 text-justify my-5'>
                    I am a Computer Engineer with a passion for programming and web development.
                    I am currently studying at the University of Engineering and Technology, Taxila.
                    I have worked on many projects and have gained a lot of experience in the field of web development.
                    Now, looking to  to work in a fun and testing
                    working environment that will urge me to improve and acquire new essential abilities and be motivated by
                    the organization to do my best for myself and the organization.
                </p>
               
                
            </div>
        </div>
    )
}

export default About