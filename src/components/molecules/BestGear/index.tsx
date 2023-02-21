import React from 'react'
import BestGearDesktopImage from 'public/images/shared/desktop/image-best-gear.jpg'
import BestGearTabletImage from 'public/images/shared/tablet/image-best-gear.jpg'
import BestGearMobileImage from 'public/images/shared/mobile/image-best-gear.jpg'
import Image from 'next/image'

const BestGear: React.FC = () => {
    return (
        <div className="w-full mt-[63px] md:mt-[200px]">
            <div className="grid max-w-screen-xl mx-auto xl:grid-cols-2 main-padding">
                <div className="  md:w-[573px] mx-auto xl:mx-0 xl:w-[445px] flex flex-col items-center justify-center order-2 xl:order-1">
                    <h2 className="text-color-dark">
                        Bringing you the{' '}
                        <span className="text-color-orange-dark">best </span>
                        audio gear
                    </h2>
                    <p className="text-color-dark/50 mt-[32px] text-center xl:text-justify">
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </div>
                <div className="order-1 xl:order-2">
                    <Image
                        src={BestGearDesktopImage}
                        alt="best gear image"
                        className="hidden rounded-lg xl:block"
                    />
                    <Image
                        src={BestGearTabletImage}
                        alt="best gear image"
                        className="hidden rounded-lg md:block xl:hidden mb-[63px]"
                    />
                    <Image
                        src={BestGearMobileImage}
                        alt="best gear image"
                        className="rounded-lg md:hidden mb-[40px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default BestGear
