import { Product } from '@/shared/types/Product'
import { useRouter } from 'next/router'
import React from 'react'
import BestGear from '../molecules/BestGear'
import CategoriesLinks from '../organisms/CategoriesLinks'
import ProductsList from '../organisms/ProductsList'

type CategoryPageProps = {
    products: Product[]
}

const CategoryPage: React.FC<CategoryPageProps> = ({ products }) => {
    const router = useRouter()
    return (
        <main>
            <div className="w-full bg-[#181818]">
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
            <BestGear />
        </main>
    )
}

export default CategoryPage
