import Button from '@/components/atoms/ButtonRectangle'
import Image from 'next/image'
import React from 'react'
import YX1DesktopBackground from '/public/images/home/desktop/image-earphones-yx1.jpg'
import YX1TabletBackground from '/public/images/home/tablet/image-earphones-yx1.jpg'
import YX1MobileBackground from '/public/images/home/mobile/image-earphones-yx1.jpg'
import Link from 'next/link'

const YX1Earphones: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 gap-[24px] md:gap-[11px] xl:gap-[30px]">
            <Image
                src={YX1DesktopBackground}
                alt="background image"
                className="hidden rounded-lg xl:block"
            />
            <Image
                src={YX1TabletBackground}
                alt="background image"
                className="hidden rounded-lg md:block xl:hidden"
            />
            <Image
                src={YX1MobileBackground}
                alt="background image"
                className="rounded-lg md:hidden"
            />
            <div className="bg-color-gray-dark px-[24px] py-[41px] md:py-[101px] md:px-[41px] xl:px-[95px] rounded-lg">
                <h4 className="mb-[32px]">YX1 Earphones</h4>
                <Link href="earphones/yx1-earphones">
                    <Button variant="transparent">See Product</Button>
                </Link>
            </div>
        </div>
    )
}

export default YX1Earphones
