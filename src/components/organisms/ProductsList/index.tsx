import { Product } from '@/shared/types/Product'
import React from 'react'
import ProductDetails from '../ProductHomeDetails'

type ProductsListProps = {
    products: Product[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
    return (
        <div className="w-full xl:mt-[160px] md:mt-[120px] mt-[64px]">
            <div className="max-w-screen-xl mx-auto main-padding">
                <div className="flex flex-col space-y-[120px] xl:space-y-[160px]">
                    {/* Product component */}
                    {products.map(({ id, ...props }, i) => (
                        <ProductDetails
                            key={id}
                            id={id}
                            render={i}
                            {...props}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsList
