import { Product, ProductAsProp } from '@/shared/interfaces/Product'
import React from 'react'
import Button from '../../ButtonRectangle'
import { currencyFormat } from 'simple-currency-format'

const ProductDescription: React.FC<ProductAsProp> = ({ product }) => {
    const price = currencyFormat(Number(product.price), 'en-US', 'USD')
    return (
        <div className="flex flex-col justify-center space-y-[32px]">
            {product.isNew && (
                <p className="custom-overline text-color-orange-dark">
                    New product
                </p>
            )}
            <h2>{product.name}</h2>
            <p className="text-justify text-color-black/50">
                {product.description}
            </p>
            <h6 className="leading-[1.28px]">{price}</h6>
            <Button>Add to Cart</Button>
        </div>
    )
}

export default ProductDescription
