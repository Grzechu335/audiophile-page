import React from 'react'

const HeroText: React.FC = () => {
    return (
        <>
            <div className="relative md:w-[400px] mx-auto text-center xl:text-start xl:mx-0">
                <p className="custom-overline text-color-white/50">
                    New Product
                </p>
                <h1 className="font-bold text-color-white mt-[16px] md:mt-[24px]">
                    XX99 Mark II Headphones
                </h1>
                <p className="text-color-white/75 mt-[24px]">
                    Experience natural, lifelike audio and exceptional build
                    quality made for the passionate music enthusiast.
                </p>
            </div>
        </>
    )
}

export default HeroText
