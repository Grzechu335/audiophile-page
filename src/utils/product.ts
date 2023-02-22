import Params from '@/shared/interfaces/Params'
import { Product } from '@/shared/interfaces/Product'
import fs from 'fs'

const getData = (): Product[] => {
    const products: Product[] = JSON.parse(
        fs.readFileSync(`src/data/products.json`, 'utf-8')
    )
    return products
}

export const getProductsByCategory = (category: string): Product[] => {
    return getData()
        .filter((product) => product.category === category)
        .map((product) => ({
            id: product.id,
            slug: product.slug,
            name: product.name,
            image: product.image,
            category: product.category,
            categoryImage: product.categoryImage,
            isNew: product.isNew,
            price: product.price,
            description: product.description,
            features: product.features,
            includes: product.includes,
            gallery: product.gallery,
            others: product.others,
        }))
        .sort((a, b) => Number(b.isNew) - Number(a.isNew))
}

export const getCategories = (): string[] => {
    const categories = getData().map((product) => product.category)
    return Array.from(new Set(categories))
}

export const getProductPaths = (): Params[] => {
    const paths = getData().map(({ category, slug }) => ({
        category,
        slug,
    }))
    return paths
}

export const getProductBySlug = (slug: string): Product => {
    return getData().filter((product) => product.slug === slug)[0]
}

export const getCategoryBySlug = (slug: string): string => {
    return getData().filter((product) => product.slug === slug)[0].category
}
