import { CategoryImage } from '@/shared/interfaces/Product'
import Image from 'next/image'
import React from 'react'

type ProductImageProps = {
    images: CategoryImage
}

const ProductImage: React.FC<ProductImageProps> = ({
    images: { desktop, mobile, tablet },
}) => {
    return (
        <div className="relative rounded-lg bg-color-gray-dark">
            <Image
                src={desktop}
                alt="speaker"
                width={540}
                height={560}
                className="hidden rounded-lg xl:block"
            />
            <Image
                src={tablet}
                alt="speaker"
                width={540}
                height={560}
                className="hidden rounded-lg md:block xl:hidden"
            />
            <Image
                src={mobile}
                alt="speaker"
                width={327}
                height={327}
                className="rounded-lg md:hidden"
            />
        </div>
    )
}

export default ProductImage
