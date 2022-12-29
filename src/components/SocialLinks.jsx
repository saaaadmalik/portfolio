import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/saad-malik-7850711b1/",
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={25} />
                </>
            ),
            href: "https://github.com/saaaadmalik"
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={25} />
                </>
            ),
            href: "mailto:saadmalik4694@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={25} />
                </>
            ),
            href: "/resume.pdf",
            download: true,
        },
    ]
    return (
        <div className='hidden xl:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map((link) => (

                    <li
                        key={link.id}
                        className='flex justify-between items-center px-4 h-14 w-40  rounded-md ml-[-100px] bg-gray-500 hover:ml-[-10px] duration-200'>
                        <a
                            href={link.href}
                            className='flex justify-between font-bold items-center w-full text-white'
                            download={link.download}
                            target="_blank"
                            rel="noreferrer" >
                            {link.child}
                        </a>

                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLinks