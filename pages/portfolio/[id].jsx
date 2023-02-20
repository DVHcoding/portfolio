import React from 'react';
import twitter from "assets/twitter.png";
import shopgenshin from "assets/shopgenshin.png";
import sharkcoin from "assets/sharkcoin.jpg";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image';



const portfolios = [
    {
        id: 1,
        title: "twitter",
        imageSrc: twitter,
        url: "twitter.png",
        src: "https://dvhcoding.github.io/twitter/",
        src1: "https://github.com/DVHcoding/twitter",
    },

    {
        id: 2,
        title: "shopgenshin",
        imageSrc: shopgenshin,
        url: "shopgenshin.jpg",
        src: "https://dvhcoding.github.io/shopgenshin/",
        src1: "https://github.com/DVHcoding/shopgenshin",
    },

    {
        id: 3,
        title: "sharkcoin",
        imageSrc: sharkcoin,
        url: "sharkcoin.jpg",
        src: "https://dvhcoding.github.io/Shark-Coin-Game/",
        src1: "https://github.com/DVHcoding/Shark-Coin-Game",
    },

];





const getPortfolioFrom = (url) => portfolios.filter(p => p.url === url)[0]

export async function getStaticPaths() {
    const paths = portfolios.map(p => ({
        params: { id: p.url }
    }))

    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({ params }) {
    const portfolio = getPortfolioFrom(params.id);

    return { props: { portfolio } };
}


const OnePortfolio = ({ portfolio: { title, imageSrc, src ,src1 } }) => {

    return (
        <div className='h-fit w-full text-center'>
            <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col'>

                <div className='flex'>
                    <Link href='/portfolio'>
                        <div className='flex items-center justify-center my-8
                        text-indigo-500 font-bold capitalize cursor-pointer'>
                            <BiChevronLeft size={25} /> Back
                        </div>
                    </Link>
                </div>

                <h1 className='capitalize text-4xl mt-2 mb-8 text-center md:text-left
                font-bold text-blue-500 tracking-wider'>
                    {title}
                </h1>

                <div className='relative sm:w-96 sm:h-56 mx-auto overflow-hidden my-8 shadow-gray-600 shadow-md'>
                    <Image src={imageSrc} alt="bla" />
                </div>

                <div className='flex flex-wrap items-center justify-center gap-1 md:gap-10 '>
                    <Link href={src}>
                        <div className='group flex items-center justify-center  bg-blue-500 
                        text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider'>
                            Demo
                            <span className='duration-200 ease-in '>
                                <AiOutlineCaretRight size={18} className='ml-2' />
                            </span>
                        </div>
                    </Link>


                    <Link href={src1}>
                        <div className='group flex items-center justify-center my-8 bg-blue-500 
                        text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                            My portfolio
                            <span className='duration-200 ease-in'>
                                <FaGithub size={25} className='ml-2' />
                            </span>
                        </div>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default OnePortfolio;