import React from 'react'
import HeroDesktop from '@/components/atoms/Hero/HeroImages/HeroDesktopImage'
import HeroTablet from '@/components/atoms/Hero/HeroImages/HeroTabletImage'
import HeroMobile from '@/components/atoms/Hero/HeroImages/HeroMobileImage'

const HeroBackground = () => {
    return (
        <>
            <HeroDesktop />
            <HeroTablet />
            <HeroMobile />
        </>
    )
}

export default HeroBackground
