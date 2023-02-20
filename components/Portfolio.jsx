import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdExpandMore } from 'react-icons/md';
import twitter from "../assets/twitter.png";
import shopgenshin from "../assets/shopgenshin.png";
import sharkcoin from "../assets/sharkcoin.jpg";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: "twitter",
            imageSrc: twitter,
            url: "twitter.png",
        },

        {
            id: 2,
            title: "shopgenshin",
            imageSrc: shopgenshin,
            url: "shopgenshin.jpg",
        },

        {
            id: 3,
            title: "sharkcoin",
            imageSrc: sharkcoin,
            url: "sharkcoin.jpg",
        },
        
    ];



    return (
        <div id='portfolio' className='w-full'>
            <div className='max-w-screen-xl mx-auto px-8 py-16
            text-center md:text-left'>

                <h2 className='text-4xl md:text-5xl tracking-wider uppercase 
                text-blue-500 font-bold'>portfolio</h2>

                <p className='py-4 max-w-lg pb-10'>
                    Some of my recent projects include creating responsive e-commerce websites,
                    developing interactive web applications, and building custom WordPress themes.
                    I am confident in my ability to take on new challenges and deliver quality work in a timely
                    and efficient manner.
                </p>

                <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8 cursor-pointer'>
                    {
                        portfolios.map(({ id, title, imageSrc, url }) => (
                            <Link key={id} href={`/portfolio/${url}`}>
                                <div className='cursor-pointer group shadow-md  
                                shadow-gray-600 overflow-hidden rounded-md'>
                                    <Image src={imageSrc} alt={title} className="rounded-md
                                    duration-200 hover:scale-110" />

                                    <h2 className='text-center text-base capitalize 
                                    my-4 font-light duration-200 group-hover:underline
                                    underline-offset-4'>
                                        {title}
                                    </h2>
                                </div>
                            </Link>
                        ))
                    }
                </div>

                <div className='flex items-center justify-center'>
                    <Link href="/portfolio">
                        <div className='group flex items-center justify-center my-8 bg-blue-500 
                         text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider'>
                            all projects
                            <span className='-rotate-90 duration-100 ease-in group-hover:translate-x-3'>
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio