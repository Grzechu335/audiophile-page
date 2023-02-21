import YX1Earphones from '@/components/molecules/YX1Earphones'
import ZX7Speaker from '@/components/molecules/ZX7Speaker'
import ZX9Speaker from '@/components/molecules/ZX9Speaker'
import React from 'react'

const Gallery: React.FC = () => {
    return (
        <div className="w-full bg-color-white">
            <div className="grid max-w-screen-xl mx-auto gap-[24px] xl:gap-[60px] md:gap-[32px] main-padding">
                <ZX9Speaker />
                <ZX7Speaker />
                <YX1Earphones />
            </div>
        </div>
    )
}

export default Gallery
