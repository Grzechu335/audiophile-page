import OtherProductItem from '@/components/molecules/OtherProductItem'
import { Other } from '@/shared/interfaces/Product'
import React from 'react'

export type OtherProductsProps = {
    others: Other[]
}

const OtherProducts: React.FC<OtherProductsProps> = ({ others }) => {
    return (
        <div className="flex flex-col mt-[160px] text-center pb-[30px]">
            <h3 className="">You May Also Like</h3>
            <div className="grid md:grid-cols-3 space-y-[32px] md:space-y-0  md:gap-[10px] xl:gap-[30px] mt-[64px]">
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
