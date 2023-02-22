import { Product } from '@/shared/interfaces/Product'
import React from 'react'

type ProductIncludesProps = {
    product: Product
}

const ProductIncludes: React.FC<ProductIncludesProps> = ({ product }) => {
    return (
        <div className="flex flex-col justify-between w-full md:flex-row xl:justify-start xl:w-1/3 xl:flex-col mt-[120px] xl:mt-0">
            <h3 className="mb-[32px]">In the box</h3>
            <ul className="mr-[131px] xl:mr-0 space-y-[8px]">
                {product.includes.map(({ item, quantity }, i) => (
                    <li key={i}>
                        <span className="inline-block w-[15px] font-bold text-color-orange-dark mr-[21px]">
                            {quantity}x
                        </span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductIncludes
