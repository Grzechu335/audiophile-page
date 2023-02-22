import Button from '@/components/atoms/ButtonRectangle'
import HeroText from '@/components/atoms/Hero/HeroText'
import HeroBackground from '@/components/molecules/HeroBackground'
import Link from 'next/link'
import React from 'react'

const Hero: React.FC = () => {
    return (
        <div className="w-full bg-[#181818] mt-[96px]">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative flex flex-col xl:items-start items-center w-full overflow-hidden py-[108px] md:pb-[167px] md:pt-[126px] xl:py-[128px] main-padding">
                    <HeroBackground />
                    <HeroText />
                    <Link
                        href="headphones/xx99-mark-two-headphones"
                        className="mt-[28px] md:mt-[40px]"
                    >
                        <Button variant="primary">See product</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
