import ButtonSimple from '@/components/atoms/ButtonSimple'
import CategoryLink from '@/components/molecules/NavLinks/CategoryLink'
import { links } from '@/utils/links'
import Image from 'next/image'
import React from 'react'

const CategoriesLinks = () => {
    return (
        <div className="w-full bg-color-white xl:mt-[208px] md:mt-[148px] mt-[92px]">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-[80px] md:gap-[10px] xl:gap-[30px] main-padding">
                {links.slice(1).map(({ id, ...rest }) => (
                    <CategoryLink
                        key={id}
                        {...rest}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoriesLinks
