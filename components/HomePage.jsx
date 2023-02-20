import React from 'react'
import profile from "../assets/ayaka.jpg";
import { MdExpandMore } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div id="home" className=' w-full text-center'>
            <div className='max-w-screen-xl mx-auto w-full h-full pt-24
                p-4 flex flex-wrap justify-center items-center gap-10'>

                <div className='sm:w-64 sm:h-64 w-44 h-44 max-w-auto'>
                    <Image src={profile} alt="me" className='w-full h-full object-cover rounded-xl' />
                </div>


                <div className='grid gap-5 place-items-center'>
                    <div className='grid gap-2'>
                        <h1 className='uppercase font-bold text-gray-700 text-4xl'>front-end developer</h1>

                        <p className='text-gray-600 text-xl max-w-sm mx-auto sm:text-left'>
                            I have 2 years of experience building and designing
                            software.
                            Currently, I love to work on web application using technologies like
                            React, Tailwind, Next JS and GraphQL.
                        </p>
                    </div>

                    <Link href="/#me">
                        <div className='flex items-center justify-center bg-blue-500 
                        text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider '>
                            know more
                            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage