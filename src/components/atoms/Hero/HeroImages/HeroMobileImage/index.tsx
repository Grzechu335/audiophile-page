import Image from 'next/image'
import React from 'react'
import heroMobile from 'public/images/home/mobile/image-header.jpg'

const HeroMobile = () => {
    return (
        <Image
            src={heroMobile}
            alt="hero image"
            className="absolute top-[-130px] left-0 md:hidden"
        />
    )
}

export default HeroMobile
