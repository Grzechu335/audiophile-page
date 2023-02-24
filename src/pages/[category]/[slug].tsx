import ProductPage from '@/components/templates/ProductPage'
import Params from '@/shared/interfaces/Params'
import { Product } from '@/shared/interfaces/Product'
import { getProductBySlug, getProductPaths } from '@/utils/product'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'

const ProductItem: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    product,
}) => {
    return <ProductPage product={product} />
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
    const product: Product | undefined = getProductBySlug(params.slug)
    return {
        props: {
            product,
        },
    }
}
