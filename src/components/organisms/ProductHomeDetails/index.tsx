import Button from '@/components/atoms/ButtonRectangle'
import { Product } from '@/shared/types/Product'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductsDetails extends Product {
    render: number
}

const ProductDetails: React.FC<ProductsDetails> = ({
    render,
    image,
    name,
    description,
    isNew,
    slug,
    category,
}) => {
    return (
        <div className="grid xl:grid-cols-2 gap-[32px] md:gap-[52px] xl:gap-[125px]">
            {/* Image */}
            <div
                className={clsx(
                    'relative w-full h-[352px] xl:h-[560px] bg-color-gray-dark rounded-lg',
                    {
                        'xl:order-1': render % 2 !== 0,
                        'xl:order-2': render % 2 === 0,
                    }
                )}
            >
                <Image
                    src={image.desktop}
                    alt="product image"
                    className="hidden rounded-lg xl:block"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <Image
                    src={image.tablet}
                    alt="product image"
                    className="hidden rounded-lg md:block xl:hidden"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <Image
                    src={image.mobile}
                    alt="product image"
                    className="rounded-lg md:hidden"
                    fill
                />
            </div>
            {/* Product description */}
            <div
                className={clsx(
                    'flex flex-col items-center xl:items-start justify-center space-y-[24px] md:space-y-[32px] xl:space-x-0 text-center xl:text-start',
                    {
                        'xl:order-1': render % 2 === 0,
                        'xl:order-2': render % 2 !== 0,
                    }
                )}
            >
                {isNew && (
                    <p className="custom-overline text-color-orange-light">
                        New Product
                    </p>
                )}
                <h2>{name}</h2>
                <p className="text-color-black/50">{description}</p>
                <Link href={`/${category}/${slug}`}>
                    <Button variant="primary">See product</Button>
                </Link>
            </div>
        </div>
    )
}

export default ProductDetails
