import FirstGridItem from '@/components/molecules/ProductGalleryGridItems/FirstItem'
import SecondGridItem from '@/components/molecules/ProductGalleryGridItems/SecondItem'
import ThirdGridItem from '@/components/molecules/ProductGalleryGridItems/ThirdItem'
import { ProductAsProp } from '@/shared/types/Product'
import React from 'react'

const ProductGallery: React.FC<ProductAsProp> = ({ product }) => {
    return (
        <div className="grid w-full grid-areas-gallery-layout-slim md:grid-areas-gallery-layout-wide h-[756px] md:h-[368px] xl:h-[592px] gap-[20px] xl:gap-[32px] mt-[120px] xl:mt-[160px]">
            <FirstGridItem product={product} />
            <SecondGridItem product={product} />
            <ThirdGridItem product={product} />
        </div>
    )
}

export default ProductGallery
