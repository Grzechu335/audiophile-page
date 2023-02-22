import { StaticImageData } from 'next/image'

export interface Product {
    id: number
    slug: string
    name: string
    image: CategoryImage
    category: string
    categoryImage: CategoryImage
    isNew: boolean
    price: number
    description: string
    features: string
    includes: Include[]
    gallery: Gallery
    others: Other[]
}

export interface ProductAsProp {
    product: Product
}

export interface CategoryImage {
    mobile: StaticImageData | string
    tablet: StaticImageData | string
    desktop: StaticImageData | string
}

export interface Gallery {
    first: CategoryImage
    second: CategoryImage
    third: CategoryImage
}

export interface Include {
    quantity: number
    item: string
}

export interface Other {
    slug: string
    name: string
    image: CategoryImage
}
