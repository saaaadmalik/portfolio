import React from 'react'
import ecommerce from "../assets/projects/ecommerce.png"
import blog from "../assets/projects/blog.png"
import portfolio from "../assets/projects/portfolio.png"

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Ecommerce Web App',
            image: ecommerce,
            href: "https://github.com/saaaadmalik/react-app"

        },
        {
            id: 2,
            name: 'Static Blog Website',
            image: blog,
            href: "https://github.com/saaaadmalik/webproject"
        },
        {
            id: 3,
            name: 'Portfolio Website',
            image: portfolio,
            href: "https://github.com/saaaadmalik/saadmalik"
        }
    ]
    return (
        <div className='pt-20 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 flex items-center justify-center md:pt-0'>
            <div className='flex flex-col items-center justify-center max-w-screen-lg'>
                <div className='mb-5'>
                    <p className='text-3xl font-bold text-white cursor-pointer inline border-b-4 border-gray-500  md:text-5xl'>Projects</p>
                    <p className='text-white mt-5'>Check out some of my work  </p>
                </div>
                <div className='grid grid-cols-1 px-5 gap-8 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
                    {
                        projects.map((project) => (
                            <div className='flex flex-col items-center justify-around my-5 shadow-lg shadow-gray-600 rounded-xl hover:scale-105 duration-200 md:my-0'>
                                <img src={project.image} alt="" className='rounded-lg w-3/5 sm:w-3/4' />
                                <p className='text-gray-400 mt-2 text-lg'>{project.name}</p>
                                <div>
                                    <a href={project.href}><button className='text-white border-2 border-gray-500 rounded-lg px-5 py-3 mt-5  ' >View source code</button></a>
                                </div>

                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Projects