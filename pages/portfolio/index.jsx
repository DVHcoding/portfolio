import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import twitter from "assets/twitter.png";
import shopgenshin from "assets/shopgenshin.png";
import sharkcoin from "assets/sharkcoin.jpg";

export const getStaticProps = async () => {
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


    return {
        props: { portfolios },
    }
}


const OnePortfolioRoute = ({ portfolios }) => {





    return (

        <div id='portfolio' className='w-full'>
            <div className='max-w-screen-xl mx-auto pt-24 p-4
            text-center md:text-left'>

                <h2 className='text-4xl md:text-5xl tracking-wider uppercase 
               text-blue-500 font-bold pb-16'>portfolio</h2>


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


            </div>
        </div>


    )
};

export default OnePortfolioRoute;