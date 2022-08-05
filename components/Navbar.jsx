import React from 'react'
import request from '../utils/request'
import { useRouter } from 'next/router'

const Navbar = () => {

    const router = useRouter()

    return (

        <nav className="relative">

            <div className="flex items-center px-5 sm:px-5 whitespace-nowrap space-x-10 sm:space-x-20  mt-4 overflow-x-scroll scrollbar-hide">

                {Object.entries(request).map(([key, { title, url }]) => (
                    <h2 onClick={() => router.push(`/?genre=${key}`) } key={key} className='last:pr-24 cursor-pointer transition text-md duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
                ))}

            </div>

            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/6"></div>

        </nav>

    )
}

export default Navbar