import { Product } from '@/shared/interfaces/Product'
import React from 'react'

type ProductFeaturesProps = {
    product: Product
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ product }) => {
    return (
        <div className="w-full xl:w-2/3 xl:pr-[125px]">
            <h3 className="mb-[32px]">Features</h3>
            <p className="text-justify text-color-black/50">
                {product.features}
            </p>
        </div>
    )
}

export default ProductFeatures
