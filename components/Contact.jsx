import Image from "next/image";
import React from "react";
import contactus from "../assets/keqing.jpg";
import { FaFacebook, FaGithub, FaTiktok } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Contact = () => {
    return (
        <div id="contact" className="w-full">
            <div className="max-w-screen-xl mx-auto px-5 py-16 text-center md:text-left">
                <h2 className="text-5xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold">
                    contact
                </h2>

                <div className="flex flex-col md:flex-row gap-8 shadow-xl 
                shadow-blue-300 bg-white">
                    <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                        <Image
                            src={contactus}
                            alt="man with laptop"
                            className="rounded-xl"
                        />
                        <p className="pt-2 pb-8">
                            Thank you for taking the time to review my portfolio.
                            If you're interested in working together or have any questions. I'd love to hear from you.
                        </p>

                        <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <FaTiktok size={25} />
                            </div>
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <AiFillYoutube size={25} />
                            </div>
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <FaFacebook size={25} />
                            </div>
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <FaGithub size={25} />
                            </div>
                        </div>
                    </div>

                    {/* form stuff  */}
                    <div className=' md:w-1/2 h-full rounded-xl p-4'>
                        <div className='p-4 text-left '>
                            <form action='https://getform.io/f/308a9c02-07a5-490f-a593-55f171360d39' method='POST'>
                                <div className='grid md:grid-cols-2 gap-4 py-2'>
                                    <div className='flex flex-col '>
                                        <label className='capitalize text-sm py-2 text-slate-600 font-light'>
                                            Name
                                        </label>

                                        <input type="text" name='name' className='border-2 rounded-lg p-3
                                        flex focus:outline-none border-blue-200' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='capitalize text-sm py-2 text-slate-600 font-light'>
                                            Phone
                                        </label>

                                        <input type="phone" name='phone' className='border-2 rounded-lg p-3
                                        flex focus:outline-none border-blue-200' />
                                    </div>

                                    <div className='flex flex-col md:col-span-2'>
                                        <label className='capitalize text-sm py-2 text-slate-600 font-light'>
                                            Email
                                        </label>

                                        <input type="email" name='email' className='border-2 rounded-lg p-3
                                        flex focus:outline-none border-blue-200' />
                                    </div>

                                    <div className='flex flex-col md:col-span-2'>
                                        <label className='capitalize text-sm py-2 text-slate-600 font-light'>
                                            Message
                                        </label>

                                        <textarea name="message" rows="10" className='border-2
                                        rounded-lg p-3 flex focus:outline-none border-blue-200'></textarea>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                                        send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;