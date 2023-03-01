import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaFacebook, FaGithub, FaTiktok } from 'react-icons/fa';
import { AiFillYoutube } from "react-icons/ai";
import { BsSun } from "react-icons/bs"
import { BsMoonStarsFill } from "react-icons/bs"


const Navbar = ({ theme, toggleTheme }) => {

    const [navigation, setNavigation] = useState(false);
    const [pageScroll, setPageScroll] = useState(false)

    useEffect(() => {
        const sub = window.addEventListener('scroll', () =>
            setPageScroll(window.scrollY >= 90))

        return sub;

    }, [])

    const links = [
        {
            id: 1,
            link: 'home'
        },

        {
            id: 2,
            link: 'portfolio'
        },

        {
            id: 3,
            link: 'experience'
        },

        {
            id: 4,
            link: 'me'
        },

        {
            id: 5,
            link: 'contact'
        },
    ];

    return (

        <div className={`w-full h-20 z-10 fixed duration-300 ease-in
         ${pageScroll && 'bg-black text-[#fff]'}`}>

            <div className='flex justify-between items-center w-full h-full
             max-w-screen-xl mx-auto p-4'>

                <Link href="/#home" >
                    <h1 className='text-3xl lg:text-4xl font-bold uppercase underline
                        underline-offset-2 tracking-wider cursor-pointer'>
                        dvh
                    </h1>
                </Link>


                <div>
                    <ul className='flex items-center gap-10'>
                        <div className='hidden md:flex'>
                            {
                            links.map(({ id, link }) => (
                                <Link key={id} href={`/#${link}`}>
                                    <li className='ml-10 text-sm uppercase cursor-pointer
                                      duration-200 ease-out hover:scale-105 tracking-wider'>
                                        {link}
                                    </li>
                                </Link>
                            ))
                        }
                        </div> 

                        <div className='dark_mode hidden md:block '>
                            <span onClick={toggleTheme}>
                                {
                                    theme === "dark-theme" ? (
                                        <span>
                                            <BsMoonStarsFill /> Dark
                                        </span>
                                    )
                                        :
                                        (
                                            <span>
                                                <BsSun /> Light
                                            </span>
                                        )
                                }
                            </span>
                        </div>
                    </ul>


                    {
                        !navigation && (
                            <div className='md:hidden' onClick={() => setNavigation(true)}>
                                <FaBars size={30} />
                            </div>
                        )
                    }
                </div>




            </div>



            <div
                className={
                    navigation
                        ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
                        : ""
                }>

                <div
                    className={
                        navigation
                            ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 transition-all ease-in duration-300"
                            : "fixed top-0 left-[-100%] p-10 h-full ease-in-out duration-300"
                    }>

                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link onClick={() => setNavigation(false)} href="/#home">
                                <h2 className='text-xl font-bold uppercase underline offset-2 
                                 tracking-wider cursor-pointer'>
                                    dvh
                                </h2>
                            </Link>

                            <div onClick={() => setNavigation(false)} className='p-1 cursor-pointer'>
                                <FaTimes size={20} />
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 flex flex-col h-fit gap-12'>
                        <ul className='uppercase'>

                            {
                                links.map(({ id, link }) => (
                                    <Link key={id} href={`/#${link}`}>
                                        <li onClick={() => setNavigation(false)} className='py-3 text-x tracking-wider cursor-pointer'>{link}</li>
                                    </Link>
                                ))
                            }
                        </ul>

                        <div>
                            <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
                                <a href="https://www.tiktok.com/@art_hung203?lang=vi-VN" className='flex items-center justify-center rounded-full shadow-md
                                shadow-white p-3 cursor-pointer'>
                                    <FaTiktok size={20} />
                                </a>

                                <a href="https://www.youtube.com/channel/UC68wxgZP_CyvMVa1W1z2MWg" className='flex items-center justify-center rounded-full shadow-md
                                shadow-white p-3 cursor-pointer'>
                                    <AiFillYoutube size={20} />
                                </a>

                                <a href="https://www.facebook.com/profile.php?id=100044022424100" className='flex items-center justify-center rounded-full shadow-md
                                shadow-white p-3 cursor-pointer'>
                                    <FaFacebook size={20} />
                                </a>

                                <a href="https://github.com/DVHcoding" className='flex items-center justify-center rounded-full shadow-md
                                shadow-white p-3 cursor-pointer'>
                                    <FaGithub size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Navbar