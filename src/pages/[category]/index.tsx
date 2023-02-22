import CategoryPage from '@/components/templates/CategoryPage'
import Params from '@/shared/interfaces/Params'
import { Product } from '@/shared/interfaces/Product'
import { getCategories, getProductsByCategory } from '@/utils/product'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import React from 'react'

const ProductsPage: React.FC<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ products }) => {
    return (
        <>
            <Head>
                <title>Audiophile - products category</title>
            </Head>
            <main>
                <CategoryPage products={products} />
            </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories: string[] = getCategories()
    const paths = categories.map((category) => ({ params: { category } }))
    return {
        paths,
        fallback: false,
    }
}

interface StaticProps {
    products: Product[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
    const params = context.params as Params
    const products: Product[] = getProductsByCategory(params.category)
    return {
        props: {
            products,
        },
    }
}

export default ProductsPage
