import Logo from '@/components/atoms/Logo'
import SocialIcons from '@/components/molecules/SocialIcons'
import React from 'react'
import FooterLinks from '../FooterLinks'

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-color-black  py-[52px] md:py-[60px] xl:py-[75px]">
            <div className="relative max-w-screen-xl mx-auto text-center main-padding md:text-start">
                <span className="absolute transform md:transform-none translate-x-[-50%] bg-color-orange-dark left-1/2 md:left-0 top-[-52px] md:top-[-60px] xl:top-[-75px] w-1/4 md:w-[101px] h-[4px]" />
                <div className="flex flex-col items-center md:items-start xl:flex-row xl:justify-between space-y-[48px] md:space-y-[32px] xl:space-y-0">
                    <Logo />
                    <FooterLinks />
                </div>
                <div className="flex flex-wrap text-color-white/50 space-y-[48px] md:space-y-0 mt-[48px]">
                    <p className="xl:w-1/2 md:w-full md:mb-[80px] xl:mb-[56px]">
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We&apos;re a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we&apos;re open 7 days a week.
                    </p>
                    <SocialIcons />
                    <p className="xl:w-full md:w-1/2 w-full mt-[56px] md:order-2 xl:order-3">
                        Copyright 2023. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
