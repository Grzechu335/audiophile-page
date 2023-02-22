import Button from '@/components/atoms/ButtonRectangle'
import OtherProductItem from '@/components/molecules/OtherProductItem'
import { Other } from '@/shared/interfaces/Product'
import { getProductBySlug } from '@/utils/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type OtherProductsProps = {
    others: Other[]
}

const OtherProducts: React.FC<OtherProductsProps> = ({ others }) => {
    return (
        <div className="flex flex-col items-center mt-[160px]">
            <h3>You May Also Like</h3>
            <div className="grid md:grid-cols-3 space-y-[32px] md:space-y-0 md:space-x-[11px]  xl:space-x-[30px] mt-[64px]">
                {others.map((other, i) => (
                    <OtherProductItem
                        key={i}
                        {...other}
                    />
                ))}
            </div>
        </div>
    )
}

export default OtherProducts
