import Button from '@/components/atoms/ButtonRectangle'
import { Other } from '@/shared/types/Product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OtherProductItem: React.FC<Other> = ({ name, image, slug }) => {
    return (
        <div
            key={name}
            className="flex flex-col space-y-[32px] items-center w-full"
        >
            <div className="flex justify-center w-full rounded-lg bg-color-gray-dark">
                <Image
                    src={image.desktop}
                    alt="image"
                    width={315}
                    height={318}
                    className="hidden rounded-lg xl:block"
                />
            </div>
            <div className="flex justify-center w-full rounded-lg bg-color-gray-dark">
                <Image
                    src={image.tablet}
                    alt="image"
                    width={223}
                    height={471}
                    className="hidden rounded-lg md:block xl:hidden"
                />
            </div>
            <Image
                src={image.mobile}
                alt="image"
                width={327}
                height={120}
                className="rounded-lg md:hidden"
            />
            <h5>{name}</h5>
            <Link href={`/${slug}`}>
                <Button>See Product</Button>
            </Link>
        </div>
    )
}

export default OtherProductItem
