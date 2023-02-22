import { ProductAsProp } from '@/shared/interfaces/Product'
import Image from 'next/image'
import React from 'react'

const SecondGridItem: React.FC<ProductAsProp> = ({ product }) => {
    return (
        <div className="relative grid-in-second">
            <Image
                alt="image"
                src={product.gallery.second.desktop}
                fill
                className="hidden rounded-lg xl:block"
            />
            <Image
                alt="image"
                src={product.gallery.second.tablet}
                fill
                className="hidden rounded-lg md:block xl:hidden"
            />
            <Image
                alt="image"
                src={product.gallery.second.mobile}
                fill
                className="rounded-lg md:hidden"
            />
        </div>
    )
}

export default SecondGridItem
