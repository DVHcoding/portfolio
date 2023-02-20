import Image from 'next/image';
import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import sass from "../assets/sass.png";
import node from "../assets/node.png";

const Experience = () => {

    const experience = [
        {
            id: 1,
            title: "HTML",
            src: html,
        },

        {
            id: 2,
            title: "CSS",
            src: css,
        },

        {
            id: 3,
            title: "JavaScript",
            src: javascript,
        },

        {
            id: 4,
            title: "React",
            src: react,
        },

        {
            id: 5,
            title: "Next js",
            src: nextjs,
        },

        {
            id: 6,
            title: "Tailwind",
            src: tailwind,
        },

        {
            id: 7,
            title: "Sass",
            src: sass,
        },

        {
            id: 8,
            title: "NodeJs",
            src: node,
        },
    ]




    return (
        <div id='experience' className='w-full'>
            <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
                <h2 className='text-4xl md:text-5xl tracking-wider uppercase
                text-blue-500 font-bold'>Experience</h2>

                <p className='py-4 max-w-lg '>
                    As a front-end web developer, I have a strong foundation in web development
                    and am proficient in various programming languages, including HTML, CSS, and JavaScript.
                    I also have experience with popular frameworks such as React and Vue.

                </p>

                <div className='grid lg:grid-cols-4 gap-8'>
                    {
                        experience.map(({ id, title, src }) => (

                            <div key={id} className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
                            odd:shadow-rose-400 even:shadow-blue-400'>

                                <Image src={src} alt={title} className='w-[64px] h-[64px]' />

                                <h3 className='font-light'>{title}</h3>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience