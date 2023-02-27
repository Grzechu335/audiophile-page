import { ProductAsProp } from '@/shared/types/Product'
import Image from 'next/image'
import React from 'react'

const FirstGridItem: React.FC<ProductAsProp> = ({ product }) => {
    return (
        <div className="relative grid-in-first">
            <Image
                alt="image"
                src={product.gallery.first.desktop}
                fill
                className="hidden rounded-lg xl:block"
            />
            <Image
                alt="image"
                src={product.gallery.first.tablet}
                fill
                className="hidden rounded-lg md:block xl:hidden"
            />
            <Image
                alt="image"
                src={product.gallery.first.mobile}
                fill
                className="rounded-lg md:hidden"
            />
        </div>
    )
}

export default FirstGridItem
