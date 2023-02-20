import Link from 'next/link';
import React from 'react'
import { MdExpandMore } from 'react-icons/md';



const Me = () => {
    return (
        <div id='me' className='w-full'>
            <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center'>
                <h2 className='text-4xl md:text-5xl tracking-wider uppercase
                text-blue-500 font-bold'>me</h2>

                <div className='flex flex-col items-start gap-3 shadow-xl shadow-blue-300 my-8 p-5'>

                    <p>
                        • Over 2+ years of experience in working in fast-paced, high-tech environments with cross functional teams using agile
                        methodology
                    </p>

                    <p>
                        • Proficient in developing web application using React with Javascript
                    </p>

                    <p>
                        • Experience in using React JS components, Forms, Events, Keys, Router and React hooks
                    </p>

                    <p>
                        • Experience in version control & change management tools like Github and Perforce
                        Quick learner and proficient in solving the technical issues in the project
                    </p>

                </div>

                <div className='flex flex-wrap items-center justify-center gap-1 md:gap-10'>
                    <Link href="resume.pdf" download="resume.pdf">
                        <div className='group flex items-center justify-center bg-blue-500 
                        text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider'>
                            Download cv
                            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </Link>


                    <Link href="/#portfolio">
                        <div className='group flex items-center justify-center my-8 bg-blue-500 
                        text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                            My portfolio
                            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-180'>
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Me;