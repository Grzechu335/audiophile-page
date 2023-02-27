import { ProductAsProp } from '@/shared/types/Product'
import Image from 'next/image'
import React from 'react'

const ThirdGridItem: React.FC<ProductAsProp> = ({ product }) => {
    return (
        <div className="relative grid-in-third">
            <Image
                alt="image"
                src={product.gallery.third.desktop}
                fill
                className="hidden rounded-lg xl:block"
            />
            <Image
                alt="image"
                src={product.gallery.third.tablet}
                fill
                className="hidden rounded-lg md:block xl:hidden"
            />
            <Image
                alt="image"
                src={product.gallery.third.mobile}
                fill
                className="rounded-lg md:hidden"
            />
        </div>
    )
}

export default ThirdGridItem
