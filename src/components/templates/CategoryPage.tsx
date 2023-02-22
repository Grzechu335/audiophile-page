import { Product } from '@/shared/interfaces/Product'
import { useRouter } from 'next/router'
import React from 'react'
import CategoriesLinks from '../organisms/CategoriesLinks'
import ProductsList from '../organisms/ProductsList'

type CategoryPageProps = {
    products: Product[]
}

const CategoryPage: React.FC<CategoryPageProps> = ({ products }) => {
    const router = useRouter()
    return (
        <main>
            <div className="w-full mt-[96px] bg-color-black">
                <div className="max-w-screen-xl mx-auto main-padding py-[32px] md:py-[105px] xl:py-[98px] text-center">
                    {/* Header */}
                    <h2 className="uppercase text-color-white">
                        {router.query.category}
                    </h2>
                </div>
            </div>
            {/* Products */}
            <ProductsList products={products} />
            <CategoriesLinks />
        </main>
    )
}

export default CategoryPage
