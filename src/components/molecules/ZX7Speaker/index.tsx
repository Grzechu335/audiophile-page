import Button from '@/components/atoms/ButtonRectangle'
import Image from 'next/image'
import React from 'react'
import ZX7DesktopBackground from '/public/images/home/desktop/image-speaker-zx7.jpg'
import ZX7TabletBackground from '/public/images/home/tablet/image-speaker-zx7.jpg'
import ZX7MobileBackground from '/public/images/home/mobile/image-speaker-zx7.jpg'

const ZX7Speaker = () => {
    return (
        <div className="relative flex py-[101px] px-[24px]  md:px-[62px] xl:px-[95px] rounded-lg">
            <Image
                src={ZX7DesktopBackground}
                alt="background image"
                className="hidden rounded-lg xl:block"
                fill
            />
            <Image
                src={ZX7TabletBackground}
                alt="background image"
                className="hidden rounded-lg md:block xl:hidden"
                fill
            />
            <Image
                src={ZX7MobileBackground}
                alt="background image"
                className="rounded-lg md:hidden"
                fill
            />
            <div className="relative">
                <h4>ZX7 Speaker</h4>
                <Button variant="transparent">See Product</Button>
            </div>
        </div>
    )
}

export default ZX7Speaker
