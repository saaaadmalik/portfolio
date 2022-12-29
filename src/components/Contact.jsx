import React from 'react'

const Contact = () => {
    return (
        <div className="pt-20 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white   ">
            <div className="flex flex-col p-4 justify-center  max-w-screen-lg mx-auto h-full">
                <div className='mb-5 flex flex-col justify-center items-center'>
                    <p className='text-3xl font-bold text-white cursor-pointer inline border-b-4 border-gray-500  md:text-5xl'>Contact</p>
                    <p className='text-white mt-5'>Feel free to contact me! </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/22384f31-0d96-4537-98f9-1ebe2828a418" method='POST' className='flex flex-col  w-full md:w-1/2'>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            name='name'
                            className='bg-transparent p-2 border-2 rounded-md text-white focus:outline-none focus:bg-transparent' />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            name='email'
                            className='bg-transparent my-4 p-2 border-2 rounded-md text-white focus:outline-none' />
                        <textarea
                            type="text"
                            placeholder='Enter your message'
                            name='message'
                            rows={10}
                            className='bg-transparent p-2 border-2 rounded-md text-white focus:outline-none' />
                            <button className='mt-3 rounded-md w-fit self-center px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 font-bold cursor-pointer '>
                                Send
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact