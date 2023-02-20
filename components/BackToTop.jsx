import React, { useEffect, useState } from 'react'
import { AiFillUpSquare } from "react-icons/ai";
function BackToTop() {

    const [BackToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div>
        {BackToTop && (
            <button className='right-[20px] bottom-[20px] sm:right-[50px] sm:bottom-[50px] z-10
            text-[40px] sm:text-[50px] grid place-items-center'
                style={{
                    position: "fixed",
                    background: "linear-gradient(145deg, #c1c1c1, #e5e5e5",
                    boxShadow: "5px 5px 10px #6d6d6d, -5px 10px #ffffff",
                    color: "gray",
                    borderRadius:"5px"

                }} onClick={scrollUp}>
                    <AiFillUpSquare/>
            </button>
        )}

    </div>
}

export default BackToTop