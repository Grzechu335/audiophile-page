import { Product } from '@/shared/interfaces/Product'
import Image from 'next/image'
import React from 'react'

type ProductImageProps = {
    product: Product
}

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
    return (
        <div className="relative rounded-lg bg-color-gray-dark">
            <Image
                src={product.image.desktop}
                alt="speaker"
                width={540}
                height={560}
                className="hidden rounded-lg xl:block"
            />
            <Image
                src={product.image.tablet}
                alt="speaker"
                width={540}
                height={560}
                className="hidden rounded-lg md:block xl:hidden"
            />
            <Image
                src={product.image.mobile}
                alt="speaker"
                width={327}
                height={327}
                className="rounded-lg md:hidden"
            />
        </div>
    )
}

export default ProductImage
