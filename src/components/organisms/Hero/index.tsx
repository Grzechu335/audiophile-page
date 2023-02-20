import Button from '@/components/atoms/ButtonRectangle'
import HeroText from '@/components/atoms/Hero/HeroText'
import HeroBackground from '@/components/molecules/NavLinks/heroBackground'
import React from 'react'

const Hero: React.FC = () => {
    return (
        <div className="w-full bg-[#181818] mt-[96px]">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative w-full overflow-hidden py-[108px] md:pb-[167px] md:pt-[126px] xl:py-[128px] main-padding">
                    <HeroBackground />
                    <HeroText />
                    <Button variant="primary">See product</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
