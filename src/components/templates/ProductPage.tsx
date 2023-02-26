import { ProductAsProp } from '@/shared/interfaces/Product'
import React from 'react'
import GoBackButton from '../atoms/GoBackButton'
import ProductDescription from '../atoms/Product/ProductDescription'
import ProductFeatures from '../atoms/Product/ProductFeatures'
import ProductImage from '../atoms/Product/ProductImage'
import ProductIncludes from '../atoms/Product/ProductIncludes'
import BestGear from '../molecules/BestGear'
import CategoriesLinks from '../organisms/CategoriesLinks'
import OtherProducts from '../organisms/OtherProducts'
import ProductGallery from '../organisms/ProductGallery'

const ProductPage: React.FC<ProductAsProp> = ({ product }) => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto main-padding">
                <GoBackButton />
                <div className="grid md:grid-cols-2 gap-[125px] mt-[56px]">
                    <ProductImage images={product?.image} />
                    <ProductDescription product={product} />
                </div>
                <div className="flex flex-col flex-wrap xl:flex-row mt-[120px] xl:mt-[160px]">
                    <ProductFeatures product={product} />
                    <ProductIncludes includes={product?.includes} />
                </div>
                <ProductGallery product={product} />
                <OtherProducts others={product.others} />
                <CategoriesLinks />
                <BestGear />
            </div>
        </div>
    )
}

export default ProductPage
