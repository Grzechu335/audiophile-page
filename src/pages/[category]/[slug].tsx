import GoBackButton from '@/components/atoms/GoBackButton'
import ProductDescription from '@/components/atoms/Product/ProductDescription'
import ProductFeatures from '@/components/atoms/Product/ProductFeatures'
import ProductImage from '@/components/atoms/Product/ProductImage'
import ProductIncludes from '@/components/atoms/Product/ProductIncludes'
import CategoriesLinks from '@/components/organisms/CategoriesLinks'
import OtherProducts from '@/components/organisms/OtherProducts'
import ProductGallery from '@/components/organisms/ProductGallery'
import Params from '@/shared/interfaces/Params'
import { Product } from '@/shared/interfaces/Product'
import { getProductBySlug, getProductPaths } from '@/utils/product'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import React from 'react'

const ProductItem: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    product,
}) => {
    return (
        <div className="mt-[96px] w-full">
            <div className="max-w-screen-xl mx-auto main-padding">
                <GoBackButton />
                <div className="grid md:grid-cols-2 gap-[125px] mt-[56px]">
                    <ProductImage product={product} />
                    <ProductDescription product={product} />
                </div>
                <div className="flex flex-col flex-wrap xl:flex-row mt-[120px] xl:mt-[160px]">
                    <ProductFeatures product={product} />
                    <ProductIncludes product={product} />
                </div>
                <ProductGallery product={product} />
                <OtherProducts others={product.others} />
                <CategoriesLinks />
            </div>
        </div>
    )
}

export default ProductItem

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs: Params[] = getProductPaths()
    const paths = slugs.map(({ category, slug }) => ({
        params: { slug, category },
    }))
    return {
        paths,
        fallback: false,
    }
}

interface ProductStaticProps {
    product: Product
}

export const getStaticProps: GetStaticProps<ProductStaticProps> = async (
    context
) => {
    const params = context.params as Params
    const product: Product = getProductBySlug(params.slug)
    return {
        props: {
            product,
        },
    }
}
