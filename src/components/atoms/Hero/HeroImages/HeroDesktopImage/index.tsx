import Image from 'next/image'
import React from 'react'
import heroDesktopImage from 'public/images/home/desktop/image-hero.jpg'

const HeroDesktop = () => {
    return (
        <Image
            src={heroDesktopImage}
            alt="hero image"
            className="absolute top-[-85px] hidden xl:block"
            style={{ objectFit: 'cover', height: '110%' }}
        />
    )
}

export default HeroDesktop
