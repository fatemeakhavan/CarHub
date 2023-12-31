'use client';

import Image from 'next/image'
import {CustomButton} from "./index";

const Hero=()=>{
    const handleScroll=()=>{}
    return(
        <div className="hero">
            <div className="bg-red-500 w-4 text-blue-300">
                Helooo
            </div>
            <div className=" flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, book, or rent a car  -- Quickly and easily
                </h1>
                <p className="hero__subtitle">
                    streamline yourcar rental experience with our effortless booking process.
                </p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}
export default Hero;