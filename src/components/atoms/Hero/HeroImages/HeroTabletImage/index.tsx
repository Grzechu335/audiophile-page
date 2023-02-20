import Image from 'next/image'
import React from 'react'
import heroTabletImage from 'public/images/home/tablet/image-header.jpg'

const HeroTablet = () => {
    return (
        <Image
            src={heroTabletImage}
            alt="hero image"
            className="absolute top-[-120px] left-0 hidden md:block xl:hidden"
        />
    )
}

export default HeroTablet
