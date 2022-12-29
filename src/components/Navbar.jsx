import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "skills",
        },
        {
            id: 5,
            link: "contact",
        },
        {
            id: 6,
            link: "university",
        },
        {
            id: 7,
            link: "college",
        },
        {
            id: 8,
            link: "school",
        },
        {
            id: 9,
            link: "city",
        },
        {
            id: 10,
            link: "village",
        },
    ]
    return (
        <div className='flex justify-between items-center w-full h-16 text-white bg-black fixed px-4'>
            <div>
                <h1 className='text-2xl font-signature '>Saad Malik</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map((link) => {
                    return (
                        <Link to={`/${link.link}`} >
                            <li key={link.id}  className='px-3 cursor cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                                {link.link}
                            </li>
                        </Link>
                    )

                })}

            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 md:hidden '>
                    {links.map((link) => {
                        return (
                            <Link to={`/${link.link}`} >
                                <li key={link.id} onClick={()=>setNav(false)} className='px-3 py-4 cursor-pointer capitalize text-2xl text-gray-500 '>
                                    {link.link}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            )}

        </div>
    )
}

export default Navbar