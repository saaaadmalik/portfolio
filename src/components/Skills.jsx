import React from 'react'
import boot from "../assets/boot.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
import tailwind from "../assets/tailwind.png"



const Skills = () => {
    const skills = [
        {
            id: 1,
            name: 'HTML',
            image: html,
            style: "shadow-orange-500"
        },
        {
            id: 2,
            name: 'CSS',
            image: css,
            style: "shadow-blue-500"
        },
        {
            id: 3,
            name: 'JavaScript',
            image: javascript,
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            name: 'React',
            image: react,
            style: "shadow-blue-500"
        },
        {
            id: 5,
            name: 'Node',
            image: node,
            style: "shadow-green-500"
        },
        {
            id: 6,
            name: 'MongoDB',
            image: mongo,
            style: "shadow-green-500"
        },
        {
            id: 7,
            name: 'Bootstrap',
            image: boot,
            style: "shadow-purple-500"
        },
        {
            id: 8,
            name: 'Tailwind',
            image: tailwind,
            style: "shadow-blue-500"
        }
    ]


    return (
        <div className='pt-20 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 flex items-center justify-center '>
            <div className='flex flex-col items-center justify-center max-w-screen-lg'>
                <div className='mb-5'>
                    <p className='text-3xl font-bold text-white cursor-pointer inline border-b-4 border-gray-500  md:text-5xl'>Skills</p>
                    <p className='text-white mt-5'>These are the technologies I've worked with. </p>
                </div>
                <div className='grid grid-cols-2 px-5 gap-8 sm:grid-cols-3 sm:px-0'>
                    {
                        skills.map((skill) => (
                            <div className={`flex flex-col items-center justify-around mx-4 shadow-lg ${skill.style} rounded-xl hover:scale-75 duration-200 cursor-pointer`}>
                                <img src={skill.image} alt="" className='rounded-lg w-2/5 sm:w-2/4' />
                                <div>
                                    <p className='text-gray-400 mt-2 text-lg'>{skill.name}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills